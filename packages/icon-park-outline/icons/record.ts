import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRecordIcon],svg[icon-park-outline-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="18" stroke-linecap="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M8 12h32M15 6h18m-7 18v6"></svg:path><svg:path d="M18 32.75c0-1.52 1.29-2.75 2.88-2.75H26v3.25c0 1.52-1.29 2.75-2.88 2.75h-2.24C19.29 36 18 34.77 18 33.25z"></svg:path><svg:path stroke-linecap="round" d="m31 25l-5-1"></svg:path></svg:g>`,
})
export class IconParkOutlineRecordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
