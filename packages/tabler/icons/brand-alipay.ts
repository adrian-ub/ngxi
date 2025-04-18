import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAlipayIcon],svg[tabler-brand-alipay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 7h10m-5-4v7"></svg:path><svg:path d="M21 17.314C18.029 15.391 6 8.535 6 15.45C6 17.166 7.52 18 8.985 18c3.512 0 6.814-5.425 6.814-8H9.195"></svg:path></svg:g>`,
})
export class TablerBrandAlipayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
