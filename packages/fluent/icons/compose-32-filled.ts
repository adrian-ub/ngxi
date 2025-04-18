import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompose32FilledIcon],svg[fluent-compose-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.634 4.134a1.25 1.25 0 1 0-1.768-1.768L12.732 17.5L12 20l2.5-.732zM18.75 3a1.25 1.25 0 1 1 0 2.5h-11A2.25 2.25 0 0 0 5.5 7.75v16.5a2.25 2.25 0 0 0 2.25 2.25h16.5a2.25 2.25 0 0 0 2.25-2.25v-11a1.25 1.25 0 1 1 2.5 0v11A4.75 4.75 0 0 1 24.25 29H7.75A4.75 4.75 0 0 1 3 24.25V7.75A4.75 4.75 0 0 1 7.75 3z"></svg:path>`,
})
export class FluentCompose32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
