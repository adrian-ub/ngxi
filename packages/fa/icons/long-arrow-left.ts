import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faLongArrowLeftIcon],svg[fa-long-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1728 544v192q0 14-9 23t-23 9H448v224q0 21-19 29t-35-5L10 666Q0 656 0 643q0-14 10-24l384-354q16-14 35-6q19 9 19 29v224h1248q14 0 23 9t9 23"></svg:path>`,
})
export class FaLongArrowLeftIcon {
  readonly viewBox = input("0 0 1728 1280")
  readonly width = input("1.35em")
  readonly height = input("1em")
}
