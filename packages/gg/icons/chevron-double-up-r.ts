import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleUpRIcon],svg[gg-chevron-double-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 12.481l1.415-1.414L12 6.824l-4.243 4.243l1.415 1.414L12 9.653z"></svg:path><svg:path d="m14.828 16.724l1.415-1.414L12 11.067L7.757 15.31l1.415 1.414L12 13.896z"></svg:path><svg:path fill-rule="evenodd" d="M23 4.774a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4zm-4-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
