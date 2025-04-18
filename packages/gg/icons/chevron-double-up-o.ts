import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronDoubleUpOIcon],svg[gg-chevron-double-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.828 12.707l1.415-1.414L12 7.05l-4.243 4.243l1.415 1.414L12 9.88z"></svg:path><svg:path d="m14.828 16.95l1.415-1.414L12 11.293l-4.243 4.243l1.415 1.414L12 14.12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m2 0a9 9 0 1 0 18 0a9 9 0 0 0-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronDoubleUpOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
