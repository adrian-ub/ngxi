import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEbooxIcon],svg[arcticons-eboox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.268v23.243h14.511L24 38.974l4.989-3.463H43.5V12.268"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.765 9.026L24 11.331v20.521L8.765 29.547zm30.469 0L24 11.331v20.521l15.234-2.305z"></svg:path>`,
})
export class ArcticonsEbooxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
