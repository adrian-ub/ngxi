import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsSnowIcon],svg[humbleicons-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13h.01M16 13h.01M13 14.5h.01M10 16h.01M16 16h.01M13 17.5h.01M8 7.036a3.5 3.5 0 0 1 1.975.99M6 13.662A3.5 3.5 0 0 1 8.37 7.11a5.002 5.002 0 0 1 9.614 1.49a2.75 2.75 0 0 1 1.59 4.122"></svg:path>`,
})
export class HumbleiconsSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
