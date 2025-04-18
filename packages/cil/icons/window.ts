import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWindowIcon],svg[cil-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424 440V48H88v392H48v32h416v-32ZM120 80h120v120H120Zm0 152h120v144H120Zm272 208H120v-32h272Zm0-64H272V232h120Zm0-176H272V80h120Z"></svg:path>`,
})
export class CilWindowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
