import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStretchingBrokenIcon],svg[solar-stretching-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14.5" cy="4.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5 22l3.849-1.373a2 2 0 0 0 1.073-.907M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165M8.5 14l-.614-.598a1.5 1.5 0 0 1 .456-2.453l2.456-1.053a1.5 1.5 0 0 1 2.09 1.38v2.62a2 2 0 0 1-.254.976l-.678 1.212"></svg:path></svg:g>`,
})
export class SolarStretchingBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
