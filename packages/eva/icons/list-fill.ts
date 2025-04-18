import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaListFillIcon],svg[eva-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="17" r="1" fill="currentColor"></svg:circle><svg:rect width="14" height="2" x="7" y="11" fill="currentColor" rx=".94" ry=".94"></svg:rect><svg:rect width="14" height="2" x="7" y="16" fill="currentColor" rx=".94" ry=".94"></svg:rect><svg:rect width="14" height="2" x="7" y="6" fill="currentColor" rx=".94" ry=".94"></svg:rect>`,
})
export class EvaListFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
