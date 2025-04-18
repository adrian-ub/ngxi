import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTargetIcon],svg[proicons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:circle cx="12" cy="12" r="5.25" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
