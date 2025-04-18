import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraRearOutlineIcon],svg[material-symbols-light-camera-rear-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17V4.616q0-.691.463-1.153T7.616 3h8.769q.69 0 1.153.463T18 4.616V17h-1V4.616q0-.231-.192-.424T16.384 4H7.616q-.231 0-.424.192T7 4.615V17zm6-7.039q.652 0 1.115-.462t.462-1.115t-.462-1.114T12 6.808t-1.114.462t-.463 1.115t.463 1.114T12 9.962m-1.65 11.846l-.708-.708l1.6-1.6H6v-1h5.242l-1.6-1.6l.708-.708L13.158 19zM14 19.5v-1h4v1zm-2-9"></svg:path>`,
})
export class MaterialSymbolsLightCameraRearOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
