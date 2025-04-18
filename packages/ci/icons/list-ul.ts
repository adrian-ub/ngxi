import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciListUlIcon],svg[ci-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H8v-2h12v2ZM6 18H4v-2h2v2Zm14-5H8v-2h12v2ZM6 13H4v-2h2v2Zm14-5H8.023V6H20v2ZM6 8H4V6h2v2Z"></svg:path>`,
})
export class CiListUlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
