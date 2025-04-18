import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonWarning32FilledIcon],svg[fluent-person-warning-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793c1.784 1.136 4.086 1.894 6.622 2.13a3.46 3.46 0 0 1 .107-3.064L19.116 18zm14.238-1.74L15.74 27.562c-.707 1.333.259 2.938 1.767 2.938h10.988c1.509 0 2.474-1.605 1.767-2.937L24.264 16.26c-.537-1.013-1.988-1.013-2.526 0m2.013 3.49v5.5a.75.75 0 1 1-1.5 0v-5.5a.75.75 0 0 1 1.5 0m.25 8.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentPersonWarning32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
