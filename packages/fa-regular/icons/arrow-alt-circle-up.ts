import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faRegularArrowAltCircleUpIcon],svg[fa-regular-arrow-alt-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8S8 119 8 256s111 248 248 248m0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256S145.5 56 256 56m20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12"></svg:path>`,
})
export class FaRegularArrowAltCircleUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
