import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRadioTwoIcon],svg[icon-park-twotone-radio-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRadioTwo0"><svg:g fill="#555" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:circle cx="24" cy="24" r="8" stroke-linecap="round" stroke-linejoin="round"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRadioTwo0)"></svg:path>`,
})
export class IconParkTwotoneRadioTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
