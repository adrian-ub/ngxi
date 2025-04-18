import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleRightOIcon],svg[gg-chevron-double-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.464 7.757L7.05 9.172L9.88 12l-2.83 2.828l1.415 1.415L12.707 12z"></svg:path><svg:path d="m11.293 9.172l1.414-1.415L16.95 12l-4.243 4.243l-1.414-1.415L14.12 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m2 0a9 9 0 1 0 18 0a9 9 0 0 0-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
