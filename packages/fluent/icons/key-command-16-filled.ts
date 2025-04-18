import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyCommand16FilledIcon],svg[fluent-key-command-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 4a2.5 2.5 0 0 1 5 0v1h3V4A2.5 2.5 0 1 1 12 6.5h-1v3h1A2.5 2.5 0 1 1 9.5 12v-1h-3v1A2.5 2.5 0 1 1 4 9.5h1v-3H4A2.5 2.5 0 0 1 1.5 4m9.5 7v1a1 1 0 1 0 1-1zM9.5 9.5v-3h-3v3zM12 5a1 1 0 1 0-1-1v1zm-7 6H4a1 1 0 1 0 1 1zm0-7a1 1 0 1 0-1 1h1z"></svg:path>`,
})
export class FluentKeyCommand16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
