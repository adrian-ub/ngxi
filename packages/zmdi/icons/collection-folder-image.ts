import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionFolderImageIcon],svg[zmdi-collection-folder-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 88v299h384v42H43q-18 0-30.5-12.5T0 387V88zm426-43q18 0 30.5 12.5T512 88v213q0 18-12.5 30.5T469 344H128q-18 0-30.5-12.5T85 301l1-256q0-17 12-29.5T128 3h128l43 42zM149 280h299l-75-96l-53 64l-75-96z"></svg:path>`,
})
export class ZmdiCollectionFolderImageIcon {
  readonly viewBox = input("0 0 512 432")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
