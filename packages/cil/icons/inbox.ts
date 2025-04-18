import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilInboxIcon],svg[cil-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 16v480h448V16Zm416 288H342.111l-32 64H201.889l-32-64H64V144h384Zm0-256v64H64V48ZM64 464V336h86.111l32 64h147.778l32-64H448v128Z"></svg:path>`,
})
export class CilInboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
