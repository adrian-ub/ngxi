import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayListSearchIcon],svg[gg-play-list-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.879 4.879h-12v2h12zm0 4h-12v2h12zm-12 4h8v2h-8z"></svg:path><svg:path fill-rule="evenodd" d="M13.757 12.757a3 3 0 0 0 3.415 4.83l1.535 1.534l1.414-1.414l-1.535-1.535a3.001 3.001 0 0 0-4.829-3.415m1.415 2.829a1 1 0 1 0 1.414-1.415a1 1 0 0 0-1.414 1.415" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPlayListSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
