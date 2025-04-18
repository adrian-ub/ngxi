import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGlobeWithMeridiansIcon],svg[openmoji-globe-with-meridians-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="28" fill="#92D3F5"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="28"></svg:circle><svg:path d="M36 8v56c-8.56 0-15.5-12.536-15.5-28S27.44 8 36 8s15.5 12.536 15.5 28S44.56 64 36 64m28-28H8m52-14H12m48 28H12"></svg:path></svg:g>`,
})
export class OpenmojiGlobeWithMeridiansIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
