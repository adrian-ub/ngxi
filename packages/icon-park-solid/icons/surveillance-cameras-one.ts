import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSurveillanceCamerasOneIcon],svg[icon-park-solid-surveillance-cameras-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 26v16m0-9h7l4-6M7 20l26.474 17.649a1 1 0 0 0 1.069.025L44 32"></svg:path><svg:path fill="currentColor" d="M7.078 12.719a1 1 0 0 1-.11-1.58l7.46-6.63a1 1 0 0 1 1.212-.09l27.065 17.732a1 1 0 0 1-.011 1.68l-9.144 5.82a1 1 0 0 1-1.092-.012z"></svg:path></svg:g>`,
})
export class IconParkSolidSurveillanceCamerasOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
