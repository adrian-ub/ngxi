import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenFieldIcon],svg[oui-token-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.27 12V4h5.46v1.57H7.203v1.641h3.18v1.574h-3.18V12z"></svg:path>`,
})
export class OuiTokenFieldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
