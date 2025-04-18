import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTelevisionUploadIcon],svg[mage-television-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18.25 3.33H5.75a3 3 0 0 0-3 3v7.87a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V6.33a3 3 0 0 0-3-3M12 17.2v3.47m-3.47 0h6.94"></svg:path><svg:path stroke-miterlimit="10" d="M12 7.265v6"></svg:path><svg:path stroke-linejoin="round" d="m14.752 9.791l-2.361-2.36a.55.55 0 0 0-.782 0L9.25 9.79"></svg:path></svg:g>`,
})
export class MageTelevisionUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
