import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSquare3dThreePointsIcon],svg[iconoir-square-3d-three-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 21V3.6a.6.6 0 0 1 .6-.6H21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 21h3.4a.6.6 0 0 0 .6-.6V17m0-10v2m0 3v2M7 21h2m3 0h2"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2M21 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirSquare3dThreePointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
