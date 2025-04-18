import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDockOutlineIcon],svg[material-symbols-light-dock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 21.385v-1h7v1zm.116-3q-.691 0-1.153-.463T7 16.769V4q0-.69.463-1.153t1.153-.462h6.769q.69 0 1.153.462T17 4v12.77q0 .69-.462 1.152t-1.153.463zM8 15.885v.884q0 .231.192.423t.423.193h6.77q.23 0 .423-.193T16 16.77v-.884zm0-1h8v-9H8zm0-10h8V4q0-.23-.192-.423t-.423-.192h-6.77q-.23 0-.423.192T8 4zm0 0v-1.5zm0 11v1.5z"></svg:path>`,
})
export class MaterialSymbolsLightDockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
