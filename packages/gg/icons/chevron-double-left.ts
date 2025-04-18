import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleLeftIcon],svg[gg-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.364 7.757L16.95 6.343L11.293 12l5.657 5.657l1.414-1.414L14.12 12z"></svg:path><svg:path d="m11.293 6.343l1.414 1.414L8.464 12l4.243 4.243l-1.414 1.414L5.636 12z"></svg:path></svg:g>`,
})
export class GgChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
