import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrop28FilledIcon],svg[fluent-drop-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.47 2.22a.75.75 0 0 1 1.06 0c.523.523 2.494 2.614 4.34 5.316c1.823 2.669 3.63 6.082 3.63 9.214c0 3.041-.917 5.374-2.49 6.947C18.442 25.267 16.299 26 14 26s-4.441-.733-6.01-2.303C6.417 22.124 5.5 19.79 5.5 16.75c0-3.132 1.807-6.545 3.63-9.214c1.846-2.702 3.817-4.793 4.34-5.316"></svg:path>`,
})
export class FluentDrop28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
