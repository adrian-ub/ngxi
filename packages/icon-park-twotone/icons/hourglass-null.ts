import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHourglassNullIcon],svg[icon-park-twotone-hourglass-null-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHourglassNull0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M7 4h34M7 44h34"></svg:path><svg:path fill="#555" d="M11 44q4-20.009 13-20t13 20z"></svg:path><svg:path fill="#555" d="M37 4q-4 20.009-13 20T11 4z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHourglassNull0)"></svg:path>`,
})
export class IconParkTwotoneHourglassNullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
