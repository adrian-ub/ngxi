import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCropLinearIcon],svg[solar-crop-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"></svg:path><svg:path stroke-linecap="round" d="M8 5h3c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v3M2 5h3m14 14v3"></svg:path><svg:path d="M8.5 11.5c0-1.414 0-2.121.44-2.56c.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44c-.44-.439-.44-1.146-.44-2.56z"></svg:path></svg:g>`,
})
export class SolarCropLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
