import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserCheckedFilledIcon],svg[tdesign-user-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m12.157 13.09l-7.072 7.071l-4.242-4.243l1.414-1.414l2.828 2.829l5.657-5.657z"></svg:path><svg:path fill="currentColor" d="M12.876 14a6.47 6.47 0 0 0-1.376 4c0 1.509.514 2.897 1.376 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
