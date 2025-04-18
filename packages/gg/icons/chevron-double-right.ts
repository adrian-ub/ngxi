import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleRightIcon],svg[gg-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.636 7.757L7.05 6.343L12.707 12L7.05 17.657l-1.414-1.414L9.88 12z"></svg:path><svg:path d="m12.707 6.343l-1.414 1.414L15.536 12l-4.243 4.243l1.414 1.414L18.364 12z"></svg:path></svg:g>`,
})
export class GgChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
