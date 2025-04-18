import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFeatureMembershipIcon],svg[carbon-feature-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28v-9l8-8l-9-9l-9 9l8 8v9a2 2 0 0 0 2 2h14v-2zM13 4.828L19.172 11L13 17.172L6.828 11z"></svg:path>`,
})
export class CarbonFeatureMembershipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
