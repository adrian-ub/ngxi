import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraRearOutlineSharpIcon],svg[material-symbols-light-camera-rear-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17V3h12v14h-1V4H7v13zm6.001-7.039q.651 0 1.114-.463t.462-1.114t-.463-1.114t-1.115-.462t-1.113.463t-.463 1.115t.464 1.113T12 9.962m-1.65 11.846l-.708-.708l1.6-1.6H6v-1h5.242l-1.6-1.6l.708-.708L13.158 19zM14 19.5v-1h4v1zM12 8.385"></svg:path>`,
})
export class MaterialSymbolsLightCameraRearOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
