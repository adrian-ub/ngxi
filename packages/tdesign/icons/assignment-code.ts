import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAssignmentCodeIcon],svg[tdesign-assignment-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2h6.628A3.5 3.5 0 0 1 12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19zm2 18h15V4h-5.862l-.262-.6a1.5 1.5 0 0 0-2.752 0l-.262.6H4.5zm1.086-8L9.5 8.086L10.914 9.5l-2.5 2.5l2.5 2.5L9.5 15.914zM14.5 8.086L18.414 12L14.5 15.914L13.086 14.5l2.5-2.5l-2.5-2.5z"></svg:path>`,
})
export class TdesignAssignmentCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
