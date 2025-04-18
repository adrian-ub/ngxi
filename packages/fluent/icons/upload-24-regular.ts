import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentUpload24RegularIcon],svg[fluent-upload-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.25 20.5l13 .004a.75.75 0 0 1 .102 1.493l-.102.007l-13-.004a.75.75 0 0 1-.102-1.493l.102-.007zm.97-13.282l4.997-4.996a.75.75 0 0 1 .976-.073l.085.073l5.003 4.996a.75.75 0 0 1-.976 1.134l-.084-.072L12.5 4.564V18.25a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L11 18.249V4.559L7.28 8.28a.75.75 0 0 1-.976.073l-.084-.073a.75.75 0 0 1-.073-.976l.073-.085l4.997-4.996L6.22 7.218z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentUpload24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
