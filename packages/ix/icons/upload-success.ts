import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUploadSuccessIcon],svg[ix-upload-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 384.78v42.667H42.667v-42.666zm100.424-194.34l33.818 26.015l-120.522 156.678l-102.435-89.63l28.096-32.11l68.213 59.702zM192 64l125.423 101.533l-26.846 33.162l-77.244-62.524v205.943h-42.666l-.001-205.942l-77.243 62.523l-26.846-33.162z"></svg:path>`,
})
export class IxUploadSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
