import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidConditionerIcon],svg[icon-park-solid-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSConditioner0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 24h32v20H8z"></svg:path><svg:path stroke="#fff" d="M37 24v-7H11v7m6-7q3-3.25 3-13c3 0 10 5.417 10 12.733"></svg:path><svg:path stroke="#000" d="M16 31h16v6H16z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSConditioner0)"></svg:path>`,
})
export class IconParkSolidConditionerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
