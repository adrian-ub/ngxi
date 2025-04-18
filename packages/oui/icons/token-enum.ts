import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenEnumIcon],svg[oui-token-enum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.211 12V4h5.578v1.57H7.145v1.641h3.359v1.574H7.145v1.645h3.644V12z"></svg:path>`,
})
export class OuiTokenEnumIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
