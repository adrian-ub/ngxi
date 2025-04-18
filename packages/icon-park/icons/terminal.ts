import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTerminalIcon],svg[icon-park-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M12 18L19 24L12 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 32H36"></svg:path></svg:g>`,
})
export class IconParkTerminalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
