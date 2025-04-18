import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarOneQuarter12RegularIcon],svg[fluent-star-one-quarter-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.718 1.546a.8.8 0 0 0-1.435 0L4.172 3.798l-2.486.361a.798.798 0 0 0-.444 1.365l1.8 1.753l-.425 2.476a.8.8 0 0 0-.005.254a.8.8 0 0 0 1.165.59l2.224-1.17l2.223 1.17a.8.8 0 0 0 1.161-.844L8.96 7.277l1.8-1.753a.8.8 0 0 0-.444-1.365L7.83 3.8zM5 8.824V4.376l.022-.041L6 2.352l.979 1.983a.8.8 0 0 0 .602.438l2.19.318l-1.585 1.544a.8.8 0 0 0-.23.708l.374 2.18l-1.958-1.03a.8.8 0 0 0-.744 0z"></svg:path>`,
})
export class FluentStarOneQuarter12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
