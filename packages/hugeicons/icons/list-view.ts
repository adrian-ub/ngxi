import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsListViewIcon],svg[hugeicons-list-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11.4c0-1.158.242-1.4 1.4-1.4h17.2c1.158 0 1.4.242 1.4 1.4v1.2c0 1.158-.242 1.4-1.4 1.4H3.4C2.242 14 2 13.758 2 12.6zm0-8C2 2.242 2.242 2 3.4 2h17.2c1.158 0 1.4.242 1.4 1.4v1.2c0 1.158-.242 1.4-1.4 1.4H3.4C2.242 6 2 5.758 2 4.6zm0 16c0-1.158.242-1.4 1.4-1.4h17.2c1.158 0 1.4.242 1.4 1.4v1.2c0 1.158-.242 1.4-1.4 1.4H3.4C2.242 22 2 21.758 2 20.6z" color="currentColor"></svg:path>`,
})
export class HugeiconsListViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
