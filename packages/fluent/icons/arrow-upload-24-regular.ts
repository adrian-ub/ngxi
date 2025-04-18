import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpload24RegularIcon],svg[fluent-arrow-upload-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 3.51a.75.75 0 1 0 0-1.5l-13-.004a.75.75 0 1 0 0 1.5zm-6.602 18.488l.102.007a.75.75 0 0 0 .743-.649l.007-.101l-.001-13.685l3.722 3.72a.75.75 0 0 0 .976.073l.085-.073a.75.75 0 0 0 .072-.977l-.073-.084l-4.997-4.996a.75.75 0 0 0-.976-.073l-.085.072L6.22 10.23a.75.75 0 0 0 .976 1.134l.084-.073l3.719-3.713L11 21.255c0 .38.282.693.648.743"></svg:path>`,
})
export class FluentArrowUpload24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
