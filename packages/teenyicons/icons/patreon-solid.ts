import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPatreonSolidIcon],svg[teenyicons-patreon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0H0v15h3zm6.5 0a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></svg:path>`,
})
export class TeenyiconsPatreonSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
