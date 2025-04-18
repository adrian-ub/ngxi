import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameSelectIcon],svg[iconoir-frame-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path d="M4.998 2H2v2.998h2.998zm.001 1.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998zM21.997 2.002H19V5h2.998zm0 17H19V22h2.998z"></svg:path><svg:path d="m10.997 15.002l-3-7l7 3l-2.998.999zm1.002-3l2.998 3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirFrameSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
