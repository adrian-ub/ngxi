import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMessageIcon],svg[ci-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9c-.433 0-.854.14-1.2.4L3 21ZM5 5v12l2.134-1.6a1.99 1.99 0 0 1 1.2-.4H19V5H5Z"></svg:path>`,
})
export class CiMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
