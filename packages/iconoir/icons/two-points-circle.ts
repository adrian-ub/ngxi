import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTwoPointsCircleIcon],svg[iconoir-two-points-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M5 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2m14 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="m19 19l-1.5-1.5m-2-2l-1-1m-2-2l-1-1m-2-2l-1-1m-2-2L5 5"></svg:path></svg:g>`,
})
export class IconoirTwoPointsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
