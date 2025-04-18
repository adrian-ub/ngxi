import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCropRotateBrIcon],svg[iconoir-crop-rotate-br-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 20h3a4 4 0 0 0 4-4v-4"></svg:path><svg:path d="M16.5 22.5L14 20l2.5-2.5M14 11V5a1 1 0 0 0-1-1H7M2 4h2m10 12v-2M4 2v11a1 1 0 0 0 1 1h11"></svg:path></svg:g>`,
})
export class IconoirCropRotateBrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
