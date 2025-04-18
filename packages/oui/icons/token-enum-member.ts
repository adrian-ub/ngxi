import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiTokenEnumMemberIcon],svg[oui-token-enum-member-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.682 12V9.247l1.023-.861a.5.5 0 0 0-.003-.768l-1.02-.844V4h5.578v1.57H9.615v1.64h3.36v1.575h-3.36v1.645h3.645V12zm.743-4.103a.14.14 0 0 1 0 .206L6.158 9.97a.133.133 0 0 1-.218-.103v-.934H2.873A.133.133 0 0 1 2.74 8.8V7.2c0-.074.06-.133.133-.133H5.94v-.934a.133.133 0 0 1 .218-.103z"></svg:path>`,
})
export class OuiTokenEnumMemberIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
