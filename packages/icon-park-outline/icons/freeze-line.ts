import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFreezeLineIcon],svg[icon-park-outline-freeze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M6 19.059h36M16.123 6L6 15m36-4.993L32 19M26.123 6l-14.2 12.624M36.123 6l-14.2 12.624"></svg:path></svg:g>`,
})
export class IconParkOutlineFreezeLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
