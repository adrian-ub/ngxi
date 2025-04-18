import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaLayoutFillIcon],svg[eva-layout-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2ZM3 10v8a3 3 0 0 0 3 3h5V10Zm10 0v11h5a3 3 0 0 0 3-3v-8Z"></svg:path>`,
})
export class EvaLayoutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
