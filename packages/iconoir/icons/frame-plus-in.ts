import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFramePlusInIcon],svg[iconoir-frame-plus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-miterlimit="1.5" d="M4.998 2H2v2.998h2.998zm.001 1.5h14M3.5 4.998V19M20.498 5v14.002M4.999 20.5h14M4.998 19H2v2.998h2.998zM21.997 2.001H19v2.998h2.998zm0 17H19v2.998h2.998z"></svg:path><svg:path d="M9 12h3m3 0h-3m0 0V9m0 3v3"></svg:path></svg:g>`,
})
export class IconoirFramePlusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
