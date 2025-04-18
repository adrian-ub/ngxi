import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBeautyInstrumentIcon],svg[icon-park-outline-beauty-instrument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 34h14m-15-7h16"></svg:path><svg:rect width="30" height="16" x="9" y="4" rx="4"></svg:rect><svg:path d="m14 20l5 24h10l5-24m-17-8h13"></svg:path></svg:g>`,
})
export class IconParkOutlineBeautyInstrumentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
