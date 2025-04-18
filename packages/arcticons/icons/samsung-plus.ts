import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungPlusIcon],svg[arcticons-samsung-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.99 27.123c.49.639 1.105.877 1.96.877h1.185a1.996 1.996 0 0 0 1.996-1.996v-.009A1.996 1.996 0 0 0 21.135 24H19.83a2 2 0 0 1-1.998-1.997h0c0-1.106.896-2.002 2.002-2.002h1.178c.856 0 1.47.237 1.961.876m3.19 3.122h4m-2-2v4"></svg:path><svg:rect width="39" height="31" x="4.5" y="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsSamsungPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
