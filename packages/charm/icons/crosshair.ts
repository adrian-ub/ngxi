import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCrosshairIcon],svg[charm-crosshair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 5.25v-3m0 11.5v-3M10.75 8h3M2.25 8h3"></svg:path><svg:circle cx="8" cy="8" r="6.25"></svg:circle></svg:g>`,
})
export class CharmCrosshairIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
