import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBonfireIcon],svg[iconoir-bonfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M9 14c0 1.61 1.377 2 3.076 2c2.89 0 3.845-1.667 1.922-5c-2.691 3-3.076-1.667-2.691-3C10.153 10 9 11.879 9 14"></svg:path><svg:path stroke-linejoin="round" d="M12 16c3.156 0 5-2.098 5-5.687S12 3 12 3s-5 3.723-5 7.313S8.844 16 12 16"></svg:path><svg:path d="m4.273 21.07l15.454-4.14m-15.454 0L12 19m7.727 2.07l-3.863-1.035"></svg:path></svg:g>`,
})
export class IconoirBonfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
