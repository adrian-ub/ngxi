import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiSortDownIcon],svg[oui-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11.692V3.556C7 3.249 7.224 3 7.5 3s.5.249.5.556v8.136l4.096-4.096a.5.5 0 0 1 .707.707l-4.242 4.243a1.5 1.5 0 0 1-.925.433a.45.45 0 0 1-.272 0a1.5 1.5 0 0 1-.925-.433L2.197 8.303a.5.5 0 1 1 .707-.707z"></svg:path>`,
})
export class OuiSortDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
