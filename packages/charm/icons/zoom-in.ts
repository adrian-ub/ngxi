import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmZoomInIcon],svg[charm-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="7.5" cy="7.5" r="4.75"></svg:circle><svg:path d="M9.25 7.5h-3.5M7.5 5.75v3.5m3.75 2l3 3"></svg:path></svg:g>`,
})
export class CharmZoomInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
