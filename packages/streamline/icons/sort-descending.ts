import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSortDescendingIcon],svg[streamline-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.929.5H.5m7.429 2.786H2.82m5.109 2.785H5.143M13.5 11L11 13.5L8.5 11M11 .5v13"></svg:path>`,
})
export class StreamlineSortDescendingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
