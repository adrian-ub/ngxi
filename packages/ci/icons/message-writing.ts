import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMessageWritingIcon],svg[ci-message-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9H7v2h2V9Zm2 0h2v2h-2V9Zm6 0h-2v2h2V9Z"></svg:path><svg:path fill="currentColor" d="M3 5v16l4.8-3.6c.346-.26.767-.4 1.2-.4h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Zm2 12V5h14v10H8.334a1.984 1.984 0 0 0-1.2.4L5 17Z"></svg:path>`,
})
export class CiMessageWritingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
