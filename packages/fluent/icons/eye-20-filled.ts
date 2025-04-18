import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEye20FilledIcon],svg[fluent-eye-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.26 11.602C3.942 8.327 6.793 6 10 6s6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C16.943 7.673 13.693 5 10 5s-6.943 2.673-7.72 6.398a.5.5 0 0 0 .98.204M9.99 8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7"></svg:path>`,
})
export class FluentEye20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
