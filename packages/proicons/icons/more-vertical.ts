import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMoreVerticalIcon],svg[proicons-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="18" r="1.75" transform="rotate(-90 12 18)"></svg:circle><svg:circle cx="12" cy="12" r="1.75" transform="rotate(-90 12 12)"></svg:circle><svg:circle cx="12" cy="6" r="1.75" transform="rotate(-90 12 6)"></svg:circle></svg:g>`,
})
export class ProiconsMoreVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
