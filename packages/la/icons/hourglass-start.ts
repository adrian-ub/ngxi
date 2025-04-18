import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHourglassStartIcon],svg[la-hourglass-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v2h2v4a7 7 0 0 0 3.406 6A7 7 0 0 0 9 22v4H7v2h18v-2h-2v-4a7 7 0 0 0-3.406-6A7 7 0 0 0 23 10V6h2V4zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5zm1 2v2c0 2.21 1.79 4 4 4s4-1.79 4-4V8zm4 9c2.773 0 5 2.227 5 5v4H11v-4c0-2.773 2.227-5 5-5"></svg:path>`,
})
export class LaHourglassStartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
