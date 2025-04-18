import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarGlassesBrokenIcon],svg[solar-glasses-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 16a4 4 0 1 1-4-4"></svg:path><svg:circle cx="6" cy="16" r="4"></svg:circle><svg:path stroke-linecap="round" d="m14 16.214l-.656-.234a4 4 0 0 0-2.688 0l-.656.234M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363s.972-.668 2.176-1.07L6 4m16 12l-.763-8.395c-.115-1.264-.172-1.896-.542-2.363s-.973-.668-2.177-1.07L18 4"></svg:path></svg:g>`,
})
export class SolarGlassesBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
