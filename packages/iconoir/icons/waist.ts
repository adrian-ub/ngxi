import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWaistIcon],svg[iconoir-waist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.4 4s-1.6 3.75-1.6 6.857c0 .995.34 1.827.8 2.656c.528.954 1.214 1.903 1.717 3.09A8.5 8.5 0 0 1 20 20M5.6 4s1.6 3.75 1.6 6.857c0 .995-.34 1.827-.8 2.656c-.528.954-1.214 1.903-1.717 3.09A8.5 8.5 0 0 0 4 20m2.4-6.487h11.2"></svg:path><svg:path d="M4.683 16.604S10.4 17.714 12 20c1.6-2.286 7.317-3.396 7.317-3.396"></svg:path></svg:g>`,
})
export class IconoirWaistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
