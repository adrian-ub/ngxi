import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPowerpointIcon],svg[icon-park-solid-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPowerpoint0"><svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 15h10v10H19z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M19 33V15"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPowerpoint0)"></svg:path>`,
})
export class IconParkSolidPowerpointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
