import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggChevronLeftOIcon],svg[gg-chevron-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 7.757l1.414 1.415L10.586 12l2.828 2.829L12 16.243L7.757 12z"></svg:path><svg:path fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgChevronLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
