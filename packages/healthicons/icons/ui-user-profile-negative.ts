import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiUserProfileNegativeIcon],svg[healthicons-ui-user-profile-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsUiUserProfileNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm11 35.63c0 .34.057.675.166.991A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.181 12.636a2.99 2.99 0 0 0-2.498-4.002c-7.758-.803-12.836-.88-20.632-.018A3.03 3.03 0 0 0 11 35.631M4 24c0 10.772 8.517 19.556 19.184 19.984a10 10 0 0 0 .678.015L24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24m20 4a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsUiUserProfileNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsUiUserProfileNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
