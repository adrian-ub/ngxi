import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEncryptedIcon],svg[material-symbols-light-encrypted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.98 14.5h2.04l-.556-3.09q.442-.154.73-.543T13.48 10q0-.613-.434-1.047q-.433-.434-1.047-.434t-1.047.434T10.519 10q0 .479.288.867t.73.542zM12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963"></svg:path>`,
})
export class MaterialSymbolsLightEncryptedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
