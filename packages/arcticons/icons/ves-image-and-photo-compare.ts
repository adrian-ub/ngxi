import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVesImageAndPhotoCompareIcon],svg[arcticons-ves-image-and-photo-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M27.436 7.303h11.243a1.78 1.78 0 0 1 1.779 1.78v29.356c0 .983-.797 1.79-1.78 1.78H27.407V23.71l9.162 11.005v-23.97h-9.162V7.316m-6.873 16.342l-9.2 11.056h9.2z"></svg:path><svg:path d="M20.663 43.5v-3.28H9.322a1.78 1.78 0 0 1-1.78-1.78V9.081c0-.982.797-1.77 1.78-1.78h11.341V4.5l2.818.001v39z"></svg:path></svg:g>`,
})
export class ArcticonsVesImageAndPhotoCompareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
