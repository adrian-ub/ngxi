import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTvIcon],svg[tdesign-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h22v17h-6v-2h4V4H3l.001 13h4v2H1zm11 13.587l4.242 4.242l2.42 2.415h-2.833l-1-1L12 18.417l-2.827 2.828l-1 1H5.34l2.419-2.414z"></svg:path>`,
})
export class TdesignTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
