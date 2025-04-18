import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCornerDownRightIcon],svg[uil-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.61 16a1.2 1.2 0 0 0-.22-.33L14.76 11a1 1 0 0 0-1.41 1.41l2.92 2.92h-7a3 3 0 0 1-3-3V3a1 1 0 1 0-2 0v9.37a5 5 0 0 0 5 5h7l-2.92 2.92a1 1 0 0 0 0 1.42a1 1 0 0 0 .71.29a1 1 0 0 0 .7-.29l4.63-4.63a1 1 0 0 0 .22-.33a1 1 0 0 0 0-.75"></svg:path>`,
})
export class UilCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
