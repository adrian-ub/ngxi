import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCursorHoverOff24RegularIcon],svg[fluent-cursor-hover-off-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.045 1.046A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H9v-1.5H4.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 .941-.998L10 11.06v10.19a.75.75 0 0 0 1.368.425l2.467-3.588l4.042.85l2.842 2.843a.75.75 0 0 0 1.061-1.06zm8.22 10.34l4.435 4.436l-2.28-.48a.75.75 0 0 0-.773.31l-1.382 2.01zm9 2.94a1 1 0 0 1-.832.986l1.143 1.143A2.5 2.5 0 0 0 22 15.5v-9A2.5 2.5 0 0 0 19.5 4H7.182l1.5 1.5H19.5a1 1 0 0 1 1 1z"></svg:path>`,
})
export class FluentCursorHoverOff24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
