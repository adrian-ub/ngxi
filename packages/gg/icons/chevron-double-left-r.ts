import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleLeftRIcon],svg[gg-chevron-double-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12.707 9.172l-1.414-1.415L7.05 12l4.243 4.243l1.414-1.415L9.88 12z"></svg:path><svg:path d="m15.536 7.757l1.414 1.415L14.12 12l2.829 2.828l-1.414 1.415L11.293 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
