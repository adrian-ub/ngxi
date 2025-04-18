import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMap2LineIcon],svg[ri-map-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm14 14.395l4-1.714V5.033l-4 1.714zm-2-.131V6.736l-4-2v12.528zm-6-2.011V4.605L4 6.319v12.648z"></svg:path>`,
})
export class RiMap2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
