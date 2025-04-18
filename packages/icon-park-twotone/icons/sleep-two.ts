import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSleepTwoIcon],svg[icon-park-twotone-sleep-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSleepTwo0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 12v24m40-7v7m0-7H4"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M22 16v13h22V19a3 3 0 0 0-3-3z"></svg:path><svg:circle cx="13" cy="20" r="3" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSleepTwo0)"></svg:path>`,
})
export class IconParkTwotoneSleepTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
