import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHammerLineIcon],svg[ri-hammer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5v13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9H3.5a1 1 0 0 1-1-1V5.618a1 1 0 0 1 .553-.894L8.5 2zm-5 2H8.972L4.5 6.236V7H11v14h2V7h2zm4 0h-2v3h2z"></svg:path>`,
})
export class RiHammerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
