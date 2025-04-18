import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsStormIcon],svg[humbleicons-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.5 10l-3 5h4l-3 5.5M8 8.036a3.5 3.5 0 0 1 1.975.99M7.5 15a3.5 3.5 0 1 1 .87-6.891a5.002 5.002 0 0 1 9.614 1.49A2.751 2.751 0 0 1 17.25 15"></svg:path>`,
})
export class HumbleiconsStormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
