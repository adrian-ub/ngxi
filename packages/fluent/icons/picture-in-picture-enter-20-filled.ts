import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPictureInPictureEnter20FilledIcon],svg[fluent-picture-in-picture-enter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 3A2.75 2.75 0 0 0 2 5.75v6.5A2.75 2.75 0 0 0 4.75 15H9v-2.5a2.5 2.5 0 0 1 2.5-2.5h6q.257 0 .5.05v-4.3A2.75 2.75 0 0 0 15.25 3zm.604 2.646L8 8.293V6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.793L4.646 6.354a.5.5 0 1 1 .708-.708M18 11.086a1.5 1.5 0 0 0-.5-.086h-6a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1-1.415"></svg:path>`,
})
export class FluentPictureInPictureEnter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
