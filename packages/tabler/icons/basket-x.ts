import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBasketXIcon],svg[tabler-basket-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 10l-2-6m-8 6l2-6m4.5 16H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.532 3.03"></svg:path><svg:path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0-4 0m12 8l-5-5m0 5l5-5"></svg:path></svg:g>`,
})
export class TablerBasketXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
