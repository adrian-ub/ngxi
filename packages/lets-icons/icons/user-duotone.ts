import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserDuotoneIcon],svg[lets-icons-user-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M12 13c-3.67 0-6.68 2.42-6.976 5.5c-.026.275.2.5.476.5h13a.465.465 0 0 0 .476-.5C18.68 15.42 15.67 13 12 13" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsUserDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
