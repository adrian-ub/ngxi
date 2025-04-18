import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPasswordMobilePhoneIcon],svg[tabler-password-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17v4m-2-1l4-2m-4 0l4 2m-9-3v4m-2-1l4-2m-4 0l4 2m12-3v4m-2-1l4-2m-4 0l4 2M7 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8m-6-9h2m-1 12v.01"></svg:path>`,
})
export class TablerPasswordMobilePhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
