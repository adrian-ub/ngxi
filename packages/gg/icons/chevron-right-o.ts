import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronRightOIcon],svg[gg-chevron-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.086 7.757L15.328 12l-4.242 4.243l-1.414-1.414L12.5 12L9.672 9.172z"></svg:path><svg:path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m9 11a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
