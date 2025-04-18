import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserCheckedIcon],svg[tdesign-user-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m17.657 7.59l-7.071 7.071l-4.243-4.243l1.414-1.414l2.829 2.829l5.657-5.657zM8 16a4 4 0 0 0-4 4h8.05v2H2v-2a6 6 0 0 1 6-6h4v2z"></svg:path>`,
})
export class TdesignUserCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
