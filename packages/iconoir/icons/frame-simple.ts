import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameSimpleIcon],svg[iconoir-frame-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5" d="M4.998 2H2v2.998h2.998zm0 1.501h14M3.499 4.998V19M20.497 5v14.002M4.998 20.501h14M4.998 19H2v2.998h2.998zM21.996 2.002h-2.998V5h2.998zm0 17h-2.998V22h2.998z"></svg:path>`,
})
export class IconoirFrameSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
