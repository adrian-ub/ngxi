import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStorageIcon],svg[material-symbols-light-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.73 19.577v-3.154h16.54v3.154zm1.54-.77h1.615v-1.615H5.268zM3.73 7.578V4.423h16.54v3.154zm1.54-.77h1.615V5.193H5.268zm-1.54 6.77v-3.154h16.54v3.154zm1.54-.77h1.615v-1.615H5.268z"></svg:path>`,
})
export class MaterialSymbolsLightStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
