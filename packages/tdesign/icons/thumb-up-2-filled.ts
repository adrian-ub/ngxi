import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUp2FilledIcon],svg[tdesign-thumb-up-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.27 2.336l-1.715-.572L6.85 10.1V22h10.634a3 3 0 0 0 2.965-2.544l1.185-7.7A3 3 0 0 0 18.668 8.3H14.8V5.846a3.7 3.7 0 0 0-2.53-3.51M2 10.1V22h2.85V10.1z"></svg:path>`,
})
export class TdesignThumbUp2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
