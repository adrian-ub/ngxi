import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferZoomInLineDuotoneIcon],svg[solar-rounded-magnifer-zoom-in-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarRoundedMagniferZoomInLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11" cy="11" r="9" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M9 11h2m0 0h2m-2 0v2m0-2V9m10.812 11.975c-.063.095-.176.208-.403.434c-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561c-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16c.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarRoundedMagniferZoomInLineDuotone0)"></svg:path>`,
})
export class SolarRoundedMagniferZoomInLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
