import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowOscillatingIcon],svg[mdi-arrow-oscillating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14h3l-4 4l-4-4h3c0-2.7 1.7-7.4 7-7.9v2c-3.4.5-5 3.8-5 5.9m14 0c0-2.7-1.7-7.4-7-7.9v2c3.4.6 5 3.8 5 5.9h-3l4 4l4-4z"></svg:path>`,
})
export class MdiArrowOscillatingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
