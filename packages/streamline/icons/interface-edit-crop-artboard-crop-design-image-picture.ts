import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCropArtboardCropDesignImagePictureIcon],svg[streamline-interface-edit-crop-artboard-crop-design-image-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.5h1.5a1 1 0 0 1 1 1V7"></svg:path><svg:path d="M4.5.5v8a1 1 0 0 0 1 1h8m-9-5h-4m9 5v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditCropArtboardCropDesignImagePictureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
