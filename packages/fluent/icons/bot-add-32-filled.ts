import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBotAdd32FilledIcon],svg[fluent-bot-add-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a1 1 0 1 0-2 0v1h-4.75A3.25 3.25 0 0 0 7 7.25v5.5A3.25 3.25 0 0 0 10.25 16h7.093A8.96 8.96 0 0 1 23 14q.863.001 1.68.157c.205-.426.32-.903.32-1.407v-5.5A3.25 3.25 0 0 0 21.75 4H17zM8.25 19h6.685A8.96 8.96 0 0 0 14 23a8.98 8.98 0 0 0 3.298 6.964Q16.667 30 16 30c-3.366 0-6.08-.698-7.987-1.968C6.077 26.742 5 24.871 5 22.7v-.45A3.25 3.25 0 0 1 8.25 19m4.25-7.25a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5M21.25 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M23 30.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentBotAdd32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
