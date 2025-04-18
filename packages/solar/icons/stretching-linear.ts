import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStretchingLinearIcon],svg[solar-stretching-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="14.5" cy="4.5" r="2.5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5 22l3.849-1.373a2 2 0 0 0 1.073-.907l2.712-4.848a2 2 0 0 0 .255-.976v-2.62a1.5 1.5 0 0 0-2.091-1.38L8.342 10.95a1.5 1.5 0 0 0-.456 2.453L8.5 14M19 22v-5.232a2 2 0 0 0-2.32-1.974l-1.013.165"></svg:path></svg:g>`,
})
export class SolarStretchingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
