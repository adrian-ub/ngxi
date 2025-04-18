import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEllipse3dThreePointsIcon],svg[iconoir-ellipse-3d-three-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M5 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M5 22h8m-8 0V2"></svg:path><svg:path fill="currentColor" d="M5 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke-dasharray="3 3" d="M8 4.193C9.37 2.821 11.108 2 13 2c4.418 0 8 4.477 8 10c0 3.271-1.256 6.176-3.2 8"></svg:path><svg:path d="M8.2 20A9 9 0 0 1 7 18.615"></svg:path><svg:path fill="currentColor" d="M13 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirEllipse3dThreePointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
