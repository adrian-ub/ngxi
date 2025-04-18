import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserClearFilledIcon],svg[tdesign-user-clear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m9.329 11.757l1.414 1.415L19.415 18l2.828 2.828l-1.414 1.415L18 19.414l-2.828 2.829l-1.414-1.415L16.586 18l-2.828-2.828l1.414-1.415L18 16.586zM12.876 14a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserClearFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
