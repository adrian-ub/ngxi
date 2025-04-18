import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRefreshAltSolidIcon],svg[teenyicons-refresh-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1A6.5 6.5 0 0 0 1 7.5H0a7.5 7.5 0 0 1 13-5.1V0h1v4h-4V3h2.19A6.48 6.48 0 0 0 7.5 1m0 13A6.5 6.5 0 0 0 14 7.5h1a7.5 7.5 0 0 1-13 5.099V15H1v-4h4v1H2.81a6.48 6.48 0 0 0 4.69 2" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsRefreshAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
