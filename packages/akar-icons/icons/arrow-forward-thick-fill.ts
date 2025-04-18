import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsArrowForwardThickFillIcon],svg[akar-icons-arrow-forward-thick-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.676 1.054a1 1 0 0 1 1.113.332l7 9a1 1 0 0 1 0 1.228l-7 9A1 1 0 0 1 14 20v-3.99c-5.379.112-7.963 1.133-9.261 2.243c-1.234 1.055-1.46 2.296-1.695 3.596l-.061.335a1 1 0 0 1-1.981-.122c-.172-2.748.086-6.73 2.027-10.061C4.913 8.768 8.305 6.282 14 6.022V2a1 1 0 0 1 .675-.946" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsArrowForwardThickFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
