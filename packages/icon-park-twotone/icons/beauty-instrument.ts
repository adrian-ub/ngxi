import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBeautyInstrumentIcon],svg[icon-park-twotone-beauty-instrument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBeautyInstrument0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 34h14m-15-7h16"></svg:path><svg:rect width="30" height="16" x="9" y="4" fill="#555" rx="4"></svg:rect><svg:path d="m14 20l5 24h10l5-24m-17-8h13"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBeautyInstrument0)"></svg:path>`,
})
export class IconParkTwotoneBeautyInstrumentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
