import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashTelegramLightIcon],svg[stash-telegram-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.045 8.937A1.47 1.47 0 0 0 15.03 7.35l-8.503 3.515c-1.078.446-.92 2.02.226 2.242l1.591.308c.441.085.899.005 1.284-.226l.464-.277a1.18 1.18 0 0 0 .425 1.53l3.65 2.288a1.176 1.176 0 0 0 1.787-.816zm-5.904 4.51l3.03-2.905c.54-.517-.114-1.373-.755-.99l-4.392 2.629a.65.65 0 0 1-.456.08l-1.591-.308l8.502-3.515a.294.294 0 0 1 .403.317l-1.09 6.979z"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.176 12a8.824 8.824 0 1 1 17.648 0a8.824 8.824 0 0 1-17.648 0"></svg:path></svg:g>`,
})
export class StashTelegramLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
