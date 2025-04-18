import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircuitIcon],svg[openmoji-circuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" stroke="#9B9B9A" stroke-miterlimit="10" stroke-width="2" d="M52 38v14H20v-8h-4v11.035c0 .533.432.965.965.965h38.07a.965.965 0 0 0 .965-.965V38z"></svg:path><svg:path fill="#EA5A47" stroke="#EA5A47" stroke-miterlimit="10" stroke-width="2" d="M17.155 16c-.638 0-1.155.517-1.155 1.155V28h4v-8h32v14h4V17.155c0-.638-.517-1.155-1.155-1.155z"></svg:path><svg:circle cx="18" cy="36" r="8" fill="#FFF"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M16 28.25V16h40v14.5m0 7.5v18H16V43.75"></svg:path><svg:path d="M20 28.25V20h32v14m0 7.5V52H20v-8.25"></svg:path><svg:circle cx="18" cy="36" r="8"></svg:circle><svg:path d="M23.657 30.343L12.343 41.657m0-11.314l11.314 11.314M49 34h10m-15 4h20"></svg:path></svg:g>`,
})
export class OpenmojiCircuitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
