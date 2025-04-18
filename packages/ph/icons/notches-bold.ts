import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotchesBoldIcon],svg[ph-notches-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 136.49l-80 80a12 12 0 1 1-17-17l80-80a12 12 0 1 1 17 17m-16-105a12 12 0 0 0-17 0l-152 152a12 12 0 0 0 17 17l152-152a12 12 0 0 0 0-16.98Z"></svg:path>`,
})
export class PhNotchesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
