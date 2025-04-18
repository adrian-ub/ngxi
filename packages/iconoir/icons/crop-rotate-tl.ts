import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateTlIcon],svg[iconoir-crop-rotate-tl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 4H7a4 4 0 0 0-4 4v4"></svg:path><svg:path d="M7.5 1.5L10 4L7.5 6.5M20 17v-6a1 1 0 0 0-1-1h-6m-5 0h2m10 12v-2M10 8v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateTlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
