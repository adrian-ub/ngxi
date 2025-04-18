import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimer48FilledIcon],svg[fluent-timer-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 5a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5zM7 27c0-9.389 7.611-17 17-17s17 7.611 17 17s-7.611 17-17 17S7 36.389 7 27m15.75-.25a1.25 1.25 0 1 0 2.5 0v-9.5a1.25 1.25 0 1 0-2.5 0zm13.616-16.384a1.25 1.25 0 0 1 1.768 0l2.5 2.5a1.25 1.25 0 0 1-1.768 1.768l-2.5-2.5a1.25 1.25 0 0 1 0-1.768"></svg:path>`,
})
export class FluentTimer48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
