import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsGridDotsIcon],svg[proicons-grid-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="5" cy="5" r="1.5"></svg:circle><svg:circle cx="12" cy="5" r="1.5"></svg:circle><svg:circle cx="19" cy="5" r="1.5"></svg:circle><svg:circle cx="5" cy="12" r="1.5"></svg:circle><svg:circle cx="12" cy="12" r="1.5"></svg:circle><svg:circle cx="19" cy="12" r="1.5"></svg:circle><svg:circle cx="5" cy="19" r="1.5"></svg:circle><svg:circle cx="12" cy="19" r="1.5"></svg:circle><svg:circle cx="19" cy="19" r="1.5"></svg:circle></svg:g>`,
})
export class ProiconsGridDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
