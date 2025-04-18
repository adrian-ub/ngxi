import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphoneOff24FilledIcon],svg[fluent-megaphone-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.505 4.506l-3.116.926A2.25 2.25 0 0 0 2 10.87v2.262a2.25 2.25 0 0 0 1.609 2.157l2.39.71L6 16.5l.005.2a4 4 0 0 0 7.59 1.556l5.123 1.524l2.001 2.002a.75.75 0 0 0 1.061-1.061zM7.5 16.444l4.625 1.376A2.5 2.5 0 0 1 7.5 16.5zM22 17.738c0 .318-.066.621-.185.895L9.996 6.814l9.113-2.708A2.25 2.25 0 0 1 22 6.263z"></svg:path>`,
})
export class FluentMegaphoneOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
