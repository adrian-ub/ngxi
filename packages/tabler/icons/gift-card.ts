import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGiftCardIcon],svg[tabler-gift-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="m7 16l3-3l3 3m-5-3c-.789 0-2-.672-2-1.5S6.711 10 7.5 10c1.128-.02 2.077 1.17 2.5 3c.423-1.83 1.372-3.02 2.5-3c.789 0 1.5.672 1.5 1.5S12.789 13 12 13z"></svg:path></svg:g>`,
})
export class TablerGiftCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
