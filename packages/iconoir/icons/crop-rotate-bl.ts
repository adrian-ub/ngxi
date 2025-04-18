import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateBlIcon],svg[iconoir-crop-rotate-bl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 14v3a4 4 0 0 0 4 4h4"></svg:path><svg:path d="M1.5 16.5L4 14l2.5 2.5M20 11V5a1 1 0 0 0-1-1h-6M8 4h2m10 12v-2M10 2v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateBlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
