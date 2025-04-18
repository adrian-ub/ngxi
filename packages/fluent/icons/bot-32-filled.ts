import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBot32FilledIcon],svg[fluent-bot-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a1 1 0 1 0-2 0v1h-4.75A3.25 3.25 0 0 0 7 7.25v5.5A3.25 3.25 0 0 0 10.25 16h11.5A3.25 3.25 0 0 0 25 12.75v-5.5A3.25 3.25 0 0 0 21.75 4H17zM8.25 19A3.25 3.25 0 0 0 5 22.25v.45c0 2.17 1.077 4.043 3.013 5.332C9.92 29.302 12.634 30 16 30s6.08-.698 7.987-1.968C25.923 26.742 27 24.871 27 22.7v-.45A3.25 3.25 0 0 0 23.75 19zm4.25-7.25a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5M21.25 10a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path>`,
})
export class FluentBot32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
