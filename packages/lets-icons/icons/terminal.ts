import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTerminalIcon],svg[lets-icons-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="17" height="14" x="3" y="5" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 10l2 2l-2 2"></svg:path><svg:path stroke-linecap="round" d="M12 14h4"></svg:path></svg:g>`,
})
export class LetsIconsTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
