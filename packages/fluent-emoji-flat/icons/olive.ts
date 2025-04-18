import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatOliveIcon],svg[fluent-emoji-flat-olive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#44911B" d="M25.267 6.724c5.8 5.8 6.35 14.64 1.23 19.76s-13.96 4.57-19.76-1.23s-6.35-14.64-1.23-19.75s13.96-4.57 19.76 1.22"></svg:path><svg:path fill="#86D72F" d="M15.527 10.054c-2.44-.91-3.96-2.91-3.37-4.48c.58-1.56 3.03-2.09 5.48-1.19s3.96 2.91 3.37 4.48s-3.03 2.1-5.48 1.19"></svg:path><svg:path fill="#F8312F" d="M9.997 14.424a4.43 4.43 0 1 0 0-8.86a4.43 4.43 0 0 0 0 8.86"></svg:path></svg:g>`,
})
export class FluentEmojiFlatOliveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
