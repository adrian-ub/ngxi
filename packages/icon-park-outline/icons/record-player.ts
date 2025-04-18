import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRecordPlayerIcon],svg[icon-park-outline-record-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="32" x="5" y="8" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 8v32"></svg:path><svg:circle cx="28" cy="24" r="9" stroke="currentColor" stroke-width="4"></svg:circle><svg:circle cx="28" cy="24" r="3" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 16h8m-8 8h8m-8 8h8"></svg:path></svg:g>`,
})
export class IconParkOutlineRecordPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
