import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFlagSolidIcon],svg[bubbles-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.592 1.787a.98.98 0 0 0-.895-.133c-3.067 1.06-4.267.636-6.607 0c-2.068-.569-3.503-1.073-6.757-.225V.667A.667.667 0 1 0 0 .667v14.666a.667.667 0 1 0 1.333 0v-1.85c3.21-.872 4.552-.381 6.581.172c2.77.754 4.08 1.106 7.447-.173a1 1 0 0 0 .639-.933V2.6a1 1 0 0 0-.408-.813"></svg:path>`,
})
export class BubblesFlagSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
