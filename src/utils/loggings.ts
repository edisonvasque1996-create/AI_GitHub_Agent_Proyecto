type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private get logLevel(): LogLevel {
    return (process.env.LOG_LEVEL as LogLevel) || 'info';
  }

  private formatMessage(level: LogLevel, message: string, data?: unknown): string {
    const timestamp = new Date().toISOString();
    const extra = data ? ` | ${JSON.stringify(data)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${extra}`;
  }

  // Escribimos siempre en process.stderr para NO interferir con stdio MCP
  info(message: string, data?: unknown): void {
    process.stderr.write(this.formatMessage('info', message, data) + '\n');
  }

  error(message: string, data?: unknown): void {
    process.stderr.write(this.formatMessage('error', message, data) + '\n');
  }

  warn(message: string, data?: unknown): void {
    process.stderr.write(this.formatMessage('warn', message, data) + '\n');
  }

  debug(message: string, data?: unknown): void {
    if (this.logLevel === 'debug') {
      process.stderr.write(this.formatMessage('debug', message, data) + '\n');
    }
  }
}

export const logger = new Logger();