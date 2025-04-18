import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangleLeft12RegularIcon],svg[fluent-triangle-left-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.459 6.786a.903.903 0 0 1 0-1.572l7.169-4.092C9.238.774 10 1.211 10 1.91v8.182c0 .698-.762 1.135-1.372.787zM2.119 6l6.864 3.917V2.083z"></svg:path>`,
})
export class FluentTriangleLeft12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
