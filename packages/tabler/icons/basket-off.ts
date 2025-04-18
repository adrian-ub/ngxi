import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBasketOffIcon],svg[tabler-basket-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 10l-2-6m-8 6l.75-2.252m1.001-3.002L9 4m3 4h7a2 2 0 0 1 1.977 2.304C20.535 12.82 20.221 14.742 20 16m-1.01 3.003a3 3 0 0 1-2.234.997H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H8"></svg:path><svg:path d="M12 12a2 2 0 1 0 2 2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBasketOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
