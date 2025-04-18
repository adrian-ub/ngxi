import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRadioIcon],svg[icon-park-twotone-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRadio0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="38" height="28" x="5" y="13" fill="#555" rx="2"></svg:rect><svg:circle cx="18" cy="28" r="6" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 24h6m-6 8h6M7 13l18-9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRadio0)"></svg:path>`,
})
export class IconParkTwotoneRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
