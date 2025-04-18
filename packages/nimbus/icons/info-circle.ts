import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusInfoCircleIcon],svg[nimbus-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.37 6.7h1.25v5H7.37z"></svg:path><svg:circle cx="8" cy="4.85" r=".65" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8A7.77 7.77 0 0 0 8 .5m0 13.75A6.52 6.52 0 0 1 1.25 8A6.52 6.52 0 0 1 8 1.75A6.52 6.52 0 0 1 14.75 8A6.52 6.52 0 0 1 8 14.25"></svg:path>`,
})
export class NimbusInfoCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
