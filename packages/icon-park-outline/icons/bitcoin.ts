import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBitcoinIcon],svg[icon-park-outline-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path d="M20 16h7a4 4 0 0 1 0 8h-7z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 16v8h7a4 4 0 0 0 4-4v0a4 4 0 0 0-4-4h-2m-5 0h-4m4 0v-4m0 4h5m0 0v-4"></svg:path><svg:path d="M20 24h9a4 4 0 0 1 0 8h-9z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 32v-8h9a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-4m-5 0v4m0-4h-4h9m-5 0h5m0 0v4"></svg:path></svg:g>`,
})
export class IconParkOutlineBitcoinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
