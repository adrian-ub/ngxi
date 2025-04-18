import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePhoneBoothIcon],svg[icon-park-outline-phone-booth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 34h20v9H14zm0-30h20v6H14zm0 6v24m6-24v24m2-18v4m10 6H14m20-16v24M4 44h40"></svg:path>`,
})
export class IconParkOutlinePhoneBoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
