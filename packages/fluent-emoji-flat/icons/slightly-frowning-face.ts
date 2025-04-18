import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSlightlyFrowningFaceIcon],svg[fluent-emoji-flat-slightly-frowning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"></svg:path><svg:path fill="#402A32" d="M14 14a3 3 0 1 1-6 0a3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M11.758 24.726a6.007 6.007 0 0 1 8.488-.026a1 1 0 0 0 1.409-1.42a8.007 8.007 0 0 0-11.313.034a1 1 0 1 0 1.416 1.412"></svg:path><svg:path fill="#fff" d="M10.42 18.412a4.206 4.206 0 1 0 0-8.412a4.206 4.206 0 0 0 0 8.412m11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.489"></svg:path><svg:path fill="#402A32" d="M11.758 24.726a6.007 6.007 0 0 1 8.488-.026a1 1 0 0 0 1.409-1.42a8.007 8.007 0 0 0-11.313.034a1 1 0 1 0 1.416 1.412M13.5 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSlightlyFrowningFaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
