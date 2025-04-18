import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilDesktopSolidIcon],svg[basil-desktop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 3.75l7.274.205a2.584 2.584 0 0 1 2.494 2.29a37.4 37.4 0 0 1 0 8.51a2.584 2.584 0 0 1-2.494 2.29l-6.024.17v2.035H17a.75.75 0 1 1 0 1.5H7a.75.75 0 0 1 0-1.5h3.75v-2.035l-6.024-.17a2.584 2.584 0 0 1-2.494-2.29a37.4 37.4 0 0 1 0-8.51a2.584 2.584 0 0 1 2.494-2.29zm-7 10a.75.75 0 1 0 0 1.5h14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class BasilDesktopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
