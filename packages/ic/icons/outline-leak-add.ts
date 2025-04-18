import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineLeakAddIcon],svg[ic-outline-leak-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H3v3c1.66 0 3-1.34 3-3m8 0h-2a9 9 0 0 1-9 9v2c6.08 0 11-4.93 11-11m-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7m0 18h2a9 9 0 0 1 9-9v-2c-6.07 0-11 4.93-11 11m8 0h3v-3c-1.66 0-3 1.34-3 3m-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7"></svg:path>`,
})
export class IcOutlineLeakAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
