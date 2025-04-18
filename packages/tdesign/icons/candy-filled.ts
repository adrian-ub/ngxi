import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCandyFilledIcon],svg[tdesign-candy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.716 2.308a1 1 0 0 0-1.703.617l-.306 3.364l-1.082-1.082a3 3 0 0 0-4.243 0l-1.88 1.88l8.415 8.413l1.88-1.879a3 3 0 0 0 0-4.242l-1.082-1.081l3.365-.306a1 1 0 0 0 .616-1.703zm-15.41 15.41a1 1 0 0 1 .617-1.703l3.373-.307l2 2l-.306 3.374a1 1 0 0 1-1.703.616zm13.197-.803l-1.878 1.878a3 3 0 0 1-4.243 0L5.21 14.62a3 3 0 0 1 0-4.242L7.09 8.5z"></svg:path>`,
})
export class TdesignCandyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
