import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronUpOIcon],svg[gg-chevron-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.829 14.828l1.414-1.414L12 9.172l-4.243 4.242l1.415 1.415L12 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m11-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronUpOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
