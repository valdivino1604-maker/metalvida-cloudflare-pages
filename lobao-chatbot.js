:root {
  --lobao-black: #0b0c0e;
  --lobao-graphite: #181b1f;
  --lobao-metal: #2c3238;
  --lobao-steel: #717b86;
  --lobao-light: #f5f6f7;
  --lobao-white: #ffffff;
  --lobao-orange: #ff7a1a;
  --lobao-orange-dark: #d85e09;
}

#lobao-chat-root,
#lobao-chat-root * {
  box-sizing: border-box;
}

#lobao-chat-root {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 9999;
  font-family: Arial, Helvetica, sans-serif;
}

.lobao-launcher {
  position: relative;
  width: 76px;
  height: 76px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: var(--lobao-orange);
  color: var(--lobao-white);
  cursor: pointer;
  box-shadow: 0 16px 36px rgba(0, 0, 0, .35);
  transition: transform 180ms ease, background 180ms ease;
}

.lobao-launcher:hover,
.lobao-launcher:focus-visible {
  transform: translateY(-2px);
  background: var(--lobao-orange-dark);
  outline: 3px solid rgba(255, 122, 26, .28);
  outline-offset: 4px;
}

.lobao-launcher[aria-expanded="true"] {
  transform: scale(.94);
}

.lobao-launcher-label {
  position: absolute;
  right: 88px;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  background: var(--lobao-black);
  border: 1px solid rgba(255, 255, 255, .12);
  color: var(--lobao-white);
  font-size: 13px;
  font-weight: 800;
  padding: 9px 12px;
  border-radius: 8px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, .24);
}

.lobao-launcher-label::after {
  content: "";
  position: absolute;
  right: -6px;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translateY(-50%) rotate(45deg);
  background: var(--lobao-black);
  border-top: 1px solid rgba(255, 255, 255, .12);
  border-right: 1px solid rgba(255, 255, 255, .12);
}

.lobao-panel {
  position: absolute;
  right: 0;
  bottom: 92px;
  width: min(390px, calc(100vw - 32px));
  height: min(650px, calc(100vh - 126px));
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  overflow: hidden;
  border-radius: 8px;
  background: var(--lobao-white);
  color: var(--lobao-black);
  box-shadow: 0 20px 50px rgba(0, 0, 0, .3);
  border: 1px solid rgba(12, 14, 16, .12);
  transform: translateY(14px) scale(.96);
  opacity: 0;
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
}

.lobao-panel.is-open {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.lobao-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  background: linear-gradient(135deg, var(--lobao-black), var(--lobao-metal));
  color: var(--lobao-white);
}

.lobao-header-text {
  min-width: 0;
  flex: 1;
}

.lobao-header-text strong {
  display: block;
  font-size: 15px;
  line-height: 1.2;
}

.lobao-header-text span {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  color: #d6dbe0;
  font-size: 12px;
}

.lobao-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #32d074;
  box-shadow: 0 0 0 4px rgba(50, 208, 116, .16);
}

.lobao-close {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border: 1px solid rgba(255, 255, 255, .16);
  border-radius: 8px;
  background: rgba(255, 255, 255, .08);
  color: var(--lobao-white);
  cursor: pointer;
}

.lobao-close:hover,
.lobao-close:focus-visible {
  background: rgba(255, 255, 255, .16);
  outline: none;
}

.lobao-avatar {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  overflow: hidden;
  flex: 0 0 auto;
  border-radius: 50%;
  background: var(--lobao-orange);
  border: 2px solid rgba(255, 255, 255, .74);
}

.lobao-launcher .lobao-avatar {
  width: 62px;
  height: 62px;
  border-color: rgba(255, 255, 255, .9);
  background: var(--lobao-black);
}

.lobao-avatar svg,
.lobao-avatar img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.lobao-messages {
  min-height: 0;
  padding: 16px 14px;
  overflow-y: auto;
  background:
    linear-gradient(180deg, rgba(44, 50, 56, .05), rgba(255, 122, 26, .04)),
    #f5f6f7;
  scroll-behavior: smooth;
}

.lobao-message-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  align-items: flex-end;
}

.lobao-message-row.is-user {
  justify-content: flex-end;
}

.lobao-message-avatar {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 50%;
  overflow: hidden;
  background: var(--lobao-orange);
  border: 1px solid rgba(12, 14, 16, .12);
}

.lobao-bubble {
  max-width: 82%;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.38;
  white-space: pre-line;
  word-wrap: break-word;
}

.lobao-message-row.is-bot .lobao-bubble {
  background: var(--lobao-white);
  border: 1px solid rgba(12, 14, 16, .08);
  color: #1c2025;
}

.lobao-message-row.is-user .lobao-bubble {
  background: var(--lobao-graphite);
  color: var(--lobao-white);
}

.lobao-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.lobao-action {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 36px;
  border: 0;
  border-radius: 8px;
  background: var(--lobao-orange);
  color: var(--lobao-white);
  cursor: pointer;
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
  padding: 9px 11px;
  text-decoration: none;
}

.lobao-action.secondary {
  background: var(--lobao-metal);
}

.lobao-action:hover,
.lobao-action:focus-visible {
  filter: brightness(.96);
  outline: 3px solid rgba(255, 122, 26, .24);
  outline-offset: 2px;
}

.lobao-quick-replies {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 10px 12px 12px;
  background: var(--lobao-white);
  border-top: 1px solid rgba(12, 14, 16, .08);
}

.lobao-chip {
  flex: 0 0 auto;
  min-height: 34px;
  border: 1px solid rgba(12, 14, 16, .14);
  border-radius: 8px;
  background: #f7f8f9;
  color: #1b1f24;
  cursor: pointer;
  font-size: 13px;
  font-weight: 800;
  padding: 8px 10px;
}

.lobao-chip:hover,
.lobao-chip:focus-visible {
  border-color: var(--lobao-orange);
  background: #fff3eb;
  outline: none;
}

.lobao-form {
  display: grid;
  grid-template-columns: 1fr 42px;
  gap: 8px;
  padding: 12px;
  background: var(--lobao-white);
  border-top: 1px solid rgba(12, 14, 16, .08);
}

.lobao-input {
  width: 100%;
  min-height: 42px;
  border: 1px solid rgba(12, 14, 16, .18);
  border-radius: 8px;
  padding: 0 12px;
  color: #14171a;
  font-size: 14px;
  outline: none;
}

.lobao-input:focus {
  border-color: var(--lobao-orange);
  box-shadow: 0 0 0 3px rgba(255, 122, 26, .18);
}

.lobao-send {
  width: 42px;
  min-height: 42px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 8px;
  background: var(--lobao-orange);
  color: var(--lobao-white);
  cursor: pointer;
}

.lobao-send:hover,
.lobao-send:focus-visible {
  background: var(--lobao-orange-dark);
  outline: 3px solid rgba(255, 122, 26, .22);
  outline-offset: 2px;
}

.lobao-send svg,
.lobao-close svg,
.lobao-action svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lobao-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 640px) {
  #lobao-chat-root {
    right: 12px;
    bottom: 12px;
    left: 12px;
  }

  .lobao-panel {
    left: 0;
    right: 0;
    bottom: 88px;
    width: 100%;
    height: min(76vh, 620px);
  }

  .lobao-launcher {
    margin-left: auto;
  }

  .lobao-launcher-label {
    display: none;
  }

  .lobao-bubble {
    max-width: 86%;
  }
}
