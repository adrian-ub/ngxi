import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMessageCircleIcon],svg[ci-message-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.051 17.828l.654.35a6.96 6.96 0 0 0 3.292.822H12a7 7 0 1 0-7-7v.003a6.96 6.96 0 0 0 .822 3.292l.35.654l-.538 2.417l2.417-.538ZM3 21l1.058-4.762A9 9 0 0 1 12 3a9 9 0 0 1 9 9a9 9 0 0 1-13.238 7.942L3 21Z"></svg:path>`,
})
export class CiMessageCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
