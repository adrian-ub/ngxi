import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRecordPlayerIcon],svg[icon-park-twotone-record-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRecordPlayer0"><svg:g fill="none"><svg:rect width="38" height="32" x="5" y="8" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 8v32"></svg:path><svg:circle cx="28" cy="24" r="9" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:circle cx="28" cy="24" r="3" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 16h8m-8 8h8m-8 8h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRecordPlayer0)"></svg:path>`,
})
export class IconParkTwotoneRecordPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
