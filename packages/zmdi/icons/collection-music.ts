import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionMusicIcon],svg[zmdi-collection-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3zm-43 106V67h-85v117q-14-11-32-11q-22 0-37.5 16T171 227t15.5 37.5T224 280t37.5-15.5T277 227V109zM43 88v299h298v42H43q-18 0-30.5-12.5T0 387V88z"></svg:path>`,
})
export class ZmdiCollectionMusicIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
