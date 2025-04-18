import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameIcon],svg[iconoir-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path d="M4.998 2.001H2v2.998h2.998zm0 8.501H2V13.5h2.998zM20.498 5v5.503M3.5 5v5.503m16.998 2.999v5.502M3.5 13.502v5.502m1.499 1.498h5.5"></svg:path><svg:path stroke-width="1.22" d="M4.999 3.503h5.5"></svg:path><svg:path d="M13.498 20.499h5.5"></svg:path><svg:path stroke-width="1.22" d="M13.498 3.501h5.5"></svg:path><svg:path d="M4.998 19.001H2v2.998h2.998zM21.997 2.002H19V5h2.998zM13.497 2H10.5v2.998h2.998zm8.5 8.503H19V13.5h2.998zm0 8.499H19V22h2.998zm-8.5-.002H10.5v2.998h2.998z"></svg:path></svg:g>`,
})
export class IconoirFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
