import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirExtrudeIcon],svg[iconoir-extrude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12.353v4.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647v-4.294a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></svg:path><svg:path d="m3.528 12.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21.5V17m0-5V2m0 0l2.5 2.5M12 2L9.5 4.5"></svg:path></svg:g>`,
})
export class IconoirExtrudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
