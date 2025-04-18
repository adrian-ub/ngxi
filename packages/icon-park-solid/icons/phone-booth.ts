import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPhoneBoothIcon],svg[icon-park-solid-phone-booth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M14 34h20v9H14zm0-30h20v6H14z"></svg:path><svg:path d="M14 10v24m6-24v24m2-18v4m10 6H14m20-16v24M4 44h40"></svg:path></svg:g>`,
})
export class IconParkSolidPhoneBoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
