import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallProhibited24FilledIcon],svg[fluent-call-prohibited-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.934 5.66q-2.94-2.595-9.185-2.588q-6.236.009-8.907 2.604c-.754.733-1.029 1.819-.721 2.85l.31 1.037c.288.967 1.261 1.613 2.276 1.511l2.035-.204c.873-.088 1.563-.711 1.711-1.547l.391-2.205a8.1 8.1 0 0 1 3.14-.707q1.689-.05 3.09.525l.632 2.355c.226.847.986 1.48 1.878 1.566l2.047.198c1.028.1 1.935-.553 2.12-1.524l.198-1.037c.195-1.028-.19-2.106-1.015-2.834M12 22a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11m0-1.5a4 4 0 0 0 3.309-6.248L9.752 19.81a4 4 0 0 0 2.248.691M8.691 18.75l5.557-5.557a4 4 0 0 0-5.557 5.557"></svg:path>`,
})
export class FluentCallProhibited24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
