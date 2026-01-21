/*
  Capgemini Cognitive Hub — Scripts
  Purpose: Client-side interactions for filters, FAQ, smooth scroll, and details toggles
  Author: Fightpur
  Dependencies: None (vanilla JS)
*/
(function () {
  'use strict';

  // Smooth scroll for in-page anchor links (delegated)
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // FAQ accordion toggle (delegated)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-item .faq-q');
    if (!btn) return;
    const item = btn.closest('.faq-item');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });

  // Show/hide game details panels (delegated)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-details]');
    if (!btn) return;
    const card = btn.closest('.card');
    const panel = card.querySelector('[data-details-panel]');
    const hidden = panel.hasAttribute('hidden');
    if (hidden) panel.removeAttribute('hidden'); else panel.setAttribute('hidden', '');
    btn.textContent = hidden ? 'Hide' : 'Details';
  });

  // Simple skill tag filtering with active states
  const listItems = Array.from(document.querySelectorAll('[role="listitem"]'));
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-skill], #filter-all');
    if (!btn) return;
    const skill = btn.getAttribute('data-skill');

    // Toggle active state among filter buttons
    document.querySelectorAll('[data-skill], #filter-all').forEach((b) => {
      b.classList.toggle('active', b === btn);
      if (b === btn) b.setAttribute('aria-pressed', 'true'); else b.setAttribute('aria-pressed', 'false');
    });

    listItems.forEach((c) => {
      if (!skill) { c.style.display = ''; return; }
      const tags = (c.getAttribute('data-tags') || '').split(/\s+/);
      c.style.display = tags.includes(skill) ? '' : 'none';
    });
  });

  // ---------------- Rules Modal ----------------
  const RULES = {
    deductive: {
      title: 'Deductive Challenge',
      category: 'Logical Reasoning & Processing Speed',
      desc: 'A matrix-based reasoning game where you complete partially filled grids by identifying patterns and applying logical constraints. This mirrors the pattern recognition and deductive reasoning sections commonly found in Capgemini, TCS, Infosys, and similar placement assessments.',
      bullets: [
        '🎯 Objective: Complete the matrix by selecting the correct symbols from given options to make each row and column unique and pattern-consistent.',
        '⏱️ Time Limit: 4 minutes per round. Time management is crucial—balance speed with accuracy.',
        '📋 Constraint: No row or column should contain identical or repeated symbol patterns. Each cell must follow the underlying visual logic.',
        '📊 Scoring: +1 point for each correct placement, -1 point for incorrect attempts. Strategic thinking over guessing is rewarded.',
        '💡 Strategy: Start by identifying cells with the fewest possible options. Use elimination to narrow down choices systematically.',
        '🎓 Placement Relevance: Builds pattern recognition, constraint handling, and logical elimination skills—key abilities tested in cognitive assessment rounds of campus placements.'
      ]
    },
    switch: {
      title: 'Switch Challenge',
      category: 'Attention Switching & Cognitive Flexibility',
      desc: 'A dynamic attention game where you must rapidly toggle between different rules and respond correctly under changing conditions. Tests your ability to shift mental contexts—a critical skill assessed in modern placement cognitive tests.',
      bullets: [
        '🎯 Objective: Respond accurately to stimuli based on the currently active rule. Rules alternate between conditions (e.g., "click if even" vs "click if odd").',
        '⏱️ Time Limit: 3-5 minutes with rapid rule changes. Each round contains 20-30 trials.',
        '📋 Rule Changes: Watch for the rule indicator at the top—it switches every 5-8 trials. Missing a switch costs points.',
        '📊 Scoring: +2 points for correct responses, -1 point for errors. Bonus: +5 points for perfect accuracy on rule-switch trials.',
        '💡 Strategy: Keep your eyes on the rule indicator. Take a micro-pause (0.5s) after each switch to recalibrate mentally.',
        '🎓 Placement Relevance: Develops task-switching speed, working memory, and rule-following under pressure—essential for multitasking scenarios tested in Cognizant, Accenture assessments.'
      ]
    },
    grid: {
      title: 'Grid Challenge',
      category: 'Abstract Reasoning & Pattern Recognition',
      desc: 'An advanced pattern inference game where you analyze a 3×3 grid to discover the underlying transformation rule and complete the missing cell. Directly aligned with matrix reasoning sections in Capgemini and similar companies.',
      bullets: [
        '🎯 Objective: Study the grid patterns (shapes, rotations, counts) across rows and columns, then select the option that correctly completes the grid.',
        '⏱️ Time Limit: 5 minutes per round with 8-10 grids. Approximately 30-40 seconds per grid recommended.',
        '📋 Pattern Types: Look for size changes, rotation sequences, color shifts, element additions/subtractions, or positional swaps.',
        '📊 Scoring: +3 points for correct answers, -1 point for incorrect. No penalty for skipping—use it strategically if stuck.',
        '💡 Strategy: Compare rows first, then columns. If stuck, eliminate obviously wrong options. Test your hypothesis against all cells.',
        '🎓 Placement Relevance: Strengthens abstract reasoning, analogy mapping, and hypothesis testing—core competencies in Raven's Progressive Matrices-style questions common in placements.'
      ]
    },
    inductive: {
      title: 'Inductive Challenge',
      category: 'Inductive Reasoning & Rule Discovery',
      desc: 'A scientific reasoning game where you observe examples, generalize hidden rules, and predict outcomes. Simulates the inductive reasoning sections found in consulting and tech company assessments.',
      bullets: [
        '🎯 Objective: Examine 3-4 example sequences, identify the common transformation rule (e.g., "double the count", "rotate 90°"), and choose the option that fits.',
        '⏱️ Time Limit: 4 minutes per round with 6-8 problems. Spend 30-50 seconds per problem.',
        '📋 Rule Discovery: Focus on what changes (size, shape, number, position) and what stays constant. Simple rules are more likely than complex ones.',
        '📊 Scoring: +2 points for correct rule application, -1 point for errors. Bonus: +3 points for solving without reviewing examples twice.',
        '💡 Strategy: Write down attributes that vary. Test your rule against ALL examples before committing. If 2 options seem valid, re-check edge cases.',
        '🎓 Placement Relevance: Builds inductive logic, generalization ability, and systematic hypothesis testing—critical for problem-solving rounds in Wipro, HCL, and analytics roles.'
      ]
    },
    motion: {
      title: 'Motion Challenge',
      category: 'Selective Attention & Visual Tracking',
      desc: 'A high-speed attention game where you track moving objects and identify targets under time pressure. Mirrors attention and perceptual speed components in assessment centers.',
      bullets: [
        '🎯 Objective: Follow highlighted target objects as they move randomly across the screen, then identify their final positions or count them accurately.',
        '⏱️ Time Limit: 2-3 minutes per round with 10-15 trials. Each trial lasts 5-10 seconds of motion tracking.',
        '📋 Tracking Rules: Targets are highlighted at the start. Once motion begins, focus only on those targets and ignore distractors.',
        '📊 Scoring: +2 points for correctly identifying all targets, +1 for partial correctness, -1 for complete misses. Speed bonus: +1 if answered within 3 seconds.',
        '💡 Strategy: Use relative positioning (e.g., "top-left cluster") rather than absolute tracking. Blink during the pause between trials to reduce eye strain.',
        '🎓 Placement Relevance: Enhances selective attention, tracking capacity, and quick decision-making—skills tested in high-pressure cognitive batteries and simulation exercises.'
      ]
    }
  };

  const rulesModal = document.getElementById('rules-modal');
  const rulesTitle = document.getElementById('rules-title');
  const rulesCategory = document.getElementById('rules-category');
  const rulesDesc = document.getElementById('rules-desc');
  const rulesList = document.getElementById('rules-list');
  const rulesStart = document.getElementById('rules-start');
  let lastTrigger = null;

  function openRules(gameKey, href) {
    const cfg = RULES[gameKey];
    if (!cfg) { window.location.href = href; return; }
    rulesTitle.textContent = cfg.title;
    rulesCategory.textContent = cfg.category;
    rulesDesc.textContent = cfg.desc;
    rulesList.innerHTML = '';
    cfg.bullets.forEach(b => { const li = document.createElement('li'); li.textContent = b; rulesList.appendChild(li); });
    rulesStart.setAttribute('href', href);

    rulesModal.setAttribute('aria-hidden', 'false');
    const content = rulesModal.querySelector('.rules-content');
    content.focus();
    document.body.style.overflow = 'hidden';
  }
  function closeRules() {
    rulesModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  document.addEventListener('click', (e) => {
    // Intercept Play clicks
    const play = e.target.closest('.action-row a.btn-primary');
    if (play && play.getAttribute('href')?.includes('game.html')) {
      e.preventDefault();
      lastTrigger = play;
      const href = play.getAttribute('href');
      const params = new URLSearchParams(href.split('?')[1] || '');
      const game = params.get('game');
      openRules(game, href);
      return;
    }

    // Close modal on [data-close]
    const closer = e.target.closest('[data-close]');
    if (closer && rulesModal.getAttribute('aria-hidden') === 'false') {
      closeRules();
    }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && rulesModal.getAttribute('aria-hidden') === 'false') closeRules(); });
})();
