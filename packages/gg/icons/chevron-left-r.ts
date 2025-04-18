import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronLeftRIcon],svg[gg-chevron-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13 7.757l1.414 1.415L11.586 12l2.828 2.828L13 16.243L8.757 12z"></svg:path><svg:path fill-rule="evenodd" d="M19 1a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4zm2 4v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
