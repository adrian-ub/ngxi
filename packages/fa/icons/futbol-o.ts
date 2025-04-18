import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFutbolOIcon],svg[fa-futbol-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m609 816l287-208l287 208l-109 336H719zM896 0q182 0 348 71t286 191t191 286t71 348t-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0m619 1350q149-203 149-454v-3l-102 89l-240-224l63-323l134 12q-150-206-389-282l53 124l-287 159l-287-159l53-124q-239 76-389 282l135-12l62 323l-240 224l-102-89v3q0 251 149 454l30-132l326 40l139 298l-116 69q117 39 240 39t240-39l-116-69l139-298l326-40z"></svg:path>`,
})
export class FaFutbolOIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
