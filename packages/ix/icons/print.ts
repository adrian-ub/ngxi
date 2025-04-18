import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPrintIcon],svg[ix-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 192h-85.333V85.333H149.333V192H64v192h85.333v42.666h213.334V384H448zm-256-64h128v64H192zm0 256v-42.667h128V384zm213.333-42.667h-42.666v-42.667H149.333v42.667h-42.666V234.666h298.666z"></svg:path>`,
})
export class IxPrintIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
