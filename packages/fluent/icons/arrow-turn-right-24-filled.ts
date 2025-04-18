import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnRight24FilledIcon],svg[fluent-arrow-turn-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.458 3.293a1 1 0 1 0-1.414 1.414L17.337 7H10.5A4.5 4.5 0 0 0 6 11.5V20a1 1 0 1 0 2 0v-8.5A2.5 2.5 0 0 1 10.5 9h7.335l-2.792 2.791a1 1 0 1 0 1.414 1.415l4.25-4.25a1 1 0 0 0 0-1.413z"></svg:path>`,
})
export class FluentArrowTurnRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
