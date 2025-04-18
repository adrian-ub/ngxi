import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmTerminalIcon],svg[charm-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 2.75h12.5v10.5H1.75z"></svg:path><svg:path d="M8.75 10.25h2.5m-6.5-4.5L7.25 8l-2.5 2.25"></svg:path></svg:g>`,
})
export class CharmTerminalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
