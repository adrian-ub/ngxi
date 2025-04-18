import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTerminalIcon],svg[iconoir-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 17h7M5 7l5 5l-5 5"></svg:path>`,
})
export class IconoirTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
