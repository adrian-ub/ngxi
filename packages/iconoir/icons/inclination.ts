import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirInclinationIcon],svg[iconoir-inclination-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 19H3.41a.6.6 0 0 1-.431-1.016L16.444 4"></svg:path><svg:path d="M20 16c-.5-3.5-1-5-3-8"></svg:path></svg:g>`,
})
export class IconoirInclinationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
