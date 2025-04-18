import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRecordPlayerIcon],svg[icon-park-record-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="32" x="5" y="8" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 8V40"></svg:path><svg:circle cx="28" cy="24" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="28" cy="24" r="3" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 16H13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 24H13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 32H13"></svg:path></svg:g>`,
})
export class IconParkRecordPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
