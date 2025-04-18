import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAngularIconIcon],svg[logos-angular-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosAngularIcon0" x1="25.071%" x2="96.132%" y1="90.929%" y2="55.184%"><svg:stop offset="0%" stop-color="#E40035"></svg:stop><svg:stop offset="24%" stop-color="#F60A48"></svg:stop><svg:stop offset="35.2%" stop-color="#F20755"></svg:stop><svg:stop offset="49.4%" stop-color="#DC087D"></svg:stop><svg:stop offset="74.5%" stop-color="#9717E7"></svg:stop><svg:stop offset="100%" stop-color="#6C00F5"></svg:stop></svg:lineargradient><svg:lineargradient id="logosAngularIcon1" x1="21.863%" x2="68.367%" y1="12.058%" y2="68.21%"><svg:stop offset="0%" stop-color="#FF31D9"></svg:stop><svg:stop offset="100%" stop-color="#FF5BE1" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosAngularIcon0)" d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"></svg:path><svg:path fill="url(#logosAngularIcon1)" d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"></svg:path>`,
})
export class LogosAngularIconIcon {
  readonly viewBox = input("0 0 256 271")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
