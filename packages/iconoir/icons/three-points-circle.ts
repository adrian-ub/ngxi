import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirThreePointsCircleIcon],svg[iconoir-three-points-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M5 10.5V9m0 6v-1.5"></svg:path><svg:path fill="currentColor" d="M5 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M10.5 19H9m6 0h-1.5"></svg:path></svg:g>`,
})
export class IconoirThreePointsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
