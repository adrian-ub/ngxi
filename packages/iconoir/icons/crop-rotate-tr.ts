import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateTrIcon],svg[iconoir-crop-rotate-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 10V7a4 4 0 0 0-4-4h-4"></svg:path><svg:path d="M22.5 7.5L20 10l-2.5-2.5M14 17v-6a1 1 0 0 0-1-1H7m-5 0h2m10 12v-2M4 8v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateTrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
