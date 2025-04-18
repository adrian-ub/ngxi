import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCheckedIcon],svg[tdesign-assignment-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a1.5 1.5 0 0 0-1.376.9l-.262.6H4.5v16h15V4h-5.862l-.262-.6A1.5 1.5 0 0 0 12 2.5M9.128 2A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2zm8.53 7.586l-7.072 7.07l-4.242-4.242L7.758 11l2.828 2.829l5.657-5.657z"></svg:path>`,
})
export class TdesignAssignmentCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
