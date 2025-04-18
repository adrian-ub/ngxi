import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextItalicCircleLinearIcon],svg[solar-text-italic-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 17h5.333M10.667 7H16m-5.333 10l2.666-10"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"></svg:path></svg:g>`,
})
export class SolarTextItalicCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
