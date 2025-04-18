import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiKeyIcon],svg[zmdi-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249 149h220v86h-42v85h-86v-85h-92q-14 37-47 61t-74 24q-53 0-90.5-37.5T0 192t37.5-90.5T128 64q41 0 74 24t47 61m-121 86q18 0 30.5-12.5T171 192t-12.5-30.5T128 149t-30.5 12.5T85 192t12.5 30.5T128 235"></svg:path>`,
})
export class ZmdiKeyIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
