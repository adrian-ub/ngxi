import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidQrcodeIcon],svg[fa-solid-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 224h192V32H0zM64 96h64v64H64zm192-64v192h192V32zm128 128h-64V96h64zM0 480h192V288H0zm64-128h64v64H64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64zm0 160h32v32h-32zm-64 0h32v32h-32z"></svg:path>`,
})
export class FaSolidQrcodeIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
