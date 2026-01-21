/*
  Capgemini Placement Preparation — Scripts
  Purpose: Handle practice button clicks, render sample questions, and mock test placeholder
  Author: Fightpur
  Dependencies: None (vanilla JS)
*/

(function () {
  'use strict';
  // ---------- DOM Helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------- Footer Year ----------
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---------- Sample Questions (Pattern-based, Original) ----------
  const QUESTIONS = {
    quant: [
      'A train covers 180 km in 3 hours. Find average speed.',
      'Ratio of boys to girls is 3:2. If boys = 45, find girls.',
      '10% discount on Rs.1500. Find selling price.',
      'A completes work in 12 days, B in 18 days. Together?',
      'Average of 5 numbers is 28. Sum of first four is 110. Fifth?'
    ],
    logical: [
      'Missing term: 3, 6, 12, 24, __, 96',
      'All roses are flowers. Some flowers fade quickly. What follows?',
      'Code: NOTE → OPUE. How is CODE written?',
      'Seating: P sits third left of Q (facing north). Ends?',
      'Odd-one-out: Triangle, Square, Pentagon, Circle, Hexagon'
    ],
    verbal: [
      'Synonym of “mitigate”.',
      'Find error: “He don’t like to be disturbed during work.”',
      'Fill: She has been working here ______ 2022.',
      'Choose the correctly punctuated sentence.',
      'RC: Infer the author’s primary purpose.'
    ],
    technical: [
      'DBMS: Primary key vs unique key.',
      'OS: Process vs thread (brief).',
      'CN: What TCP guarantees that UDP does not?',
      'OOP: Define encapsulation and benefits.',
      'DSA: Time complexity of binary search and why.'
    ],
    coding: [
      'Print second largest unique element in array.',
      'Reverse words in a sentence, preserve spaces.',
      'Check anagrams (case-insensitive).',
      'Palindrome integer without converting to string.',
      'Character frequency map sorted by character.'
    ]
  };

  // ---------- Modal Helpers ----------
  const modal = $('#question-modal');
  const qList = $('#question-list');
  const modalTitle = $('#modal-title');

  let lastActive = null;
  function focusTrap(e) {
    if (e.key !== 'Tab') return;
    const focusable = qList.closest('.modal-content').querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function openModal(title, items) {
    modalTitle.textContent = title;
    qList.innerHTML = '';
    items.forEach((q) => {
      const li = document.createElement('li');
      li.textContent = q;
      qList.appendChild(li);
    });
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lastActive = document.activeElement;
    const content = qList.closest('.modal-content');
    content.setAttribute('tabindex', '-1');
    content.focus();
    document.addEventListener('keydown', focusTrap);
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', focusTrap);
    if (lastActive && lastActive.focus) lastActive.focus();
  }

  // Close bindings
  $$('#question-modal [data-close]').forEach((btn) => btn.addEventListener('click', closeModal));
  modal?.addEventListener('click', (e) => {
    if (e.target && e.target.hasAttribute && e.target.hasAttribute('data-close')) closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // ---------- Practice Buttons ----------
  $$('.btn[data-section]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-section');
      const map = {
        quant: 'Quantitative Aptitude',
        logical: 'Logical Reasoning',
        verbal: 'Verbal Ability',
        technical: 'Technical (CS Fundamentals)',
        coding: 'Coding Practice'
      };
      openModal(map[key] || 'Practice', QUESTIONS[key] || []);
    });
  });

  // ---------- Mock Test Placeholder ----------
  $('#mock-start')?.addEventListener('click', () => {
    alert('Mock Test (placeholder): Pattern-based practice coming soon.');
  });
})();
