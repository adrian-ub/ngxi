import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSwipeRight20RegularIcon],svg[fluent-swipe-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a4 4 0 0 1 3.71 2.5H8.598a3 3 0 1 0 0 3h1.11A4.001 4.001 0 0 1 2 10a4 4 0 0 1 4-4m8.854 7.354l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.707.708L16.293 9.5H5.5a.5.5 0 0 0 0 1h10.793l-2.146 2.146a.5.5 0 0 0 .707.708"></svg:path>`,
})
export class FluentSwipeRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
