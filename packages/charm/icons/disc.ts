import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmDiscIcon],svg[charm-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="8" r="6.25"></svg:circle><svg:circle cx="8" cy="8" r="1.75"></svg:circle></svg:g>`,
})
export class CharmDiscIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
