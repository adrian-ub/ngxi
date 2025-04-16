import process from 'node:process'

import pc from 'picocolors'

type LogLevel = 'info' | 'warn' | 'error' | 'success' | 'debug'

const icons: Record<LogLevel, string> = {
  info: 'ℹ️',
  warn: '⚠️',
  error: '✖',
  success: '✔',
  debug: '🐞',
}

const colors: Record<LogLevel, (msg: string) => string> = {
  info: pc.blue,
  warn: pc.yellow,
  error: pc.red,
  success: pc.green,
  debug: pc.gray,
}

function log(level: LogLevel, msg: string) {
  if (level === 'debug' && process.env.DEBUG !== 'true')
    return
  const prefix = `${icons[level]} ${level.toUpperCase()}:`
  console.log(colors[level](prefix), msg)
}

export const logger = {
  info: (msg: string) => log('info', msg),
  warn: (msg: string) => log('warn', msg),
  error: (msg: string) => log('error', msg),
  success: (msg: string) => log('success', msg),
  debug: (msg: string) => log('debug', msg),
}
