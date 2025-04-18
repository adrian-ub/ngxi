import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfCollaboratorIcon],svg[wpf-collaborator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.002 16.417s-1.373-.31-.723-1.679c.803-1.078 1.291-2.301 1.33-2.701c0 0 1.236-.973 1.308-2.434c.077-1.457-.271-1.525-.271-1.525c.52-1.589.688-7.553-3.141-6.841c-.638-1.251-4.638-2.232-6.503 1.101C7.073 4 6.727 6.269 7.453 8.12c-.027.138-.257-.135-.341.721c-.081.825.291 2.008.695 2.556c.176.231.457.4.654.486c0 0 .242 1.47 1.389 2.855c.264 1.099-.827 1.679-.827 1.679c-3.613.695-6.934 2.701-6.934 4.871v1.681c0 2.355 5.485 2.86 10.421 2.86c4.937 0 10.385-1.419 10.385-2.86v-1.681c0-2.17-3.282-4.176-6.893-4.871M19 24h-5v-3h5z"></svg:path>`,
})
export class WpfCollaboratorIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
