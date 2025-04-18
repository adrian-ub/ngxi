import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHappyIcon],svg[cil-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16m147.078 387.078a207.253 207.253 0 1 1 44.589-66.125a207.3 207.3 0 0 1-44.589 66.125"></svg:path><svg:path fill="currentColor" d="M152 200h40v40h-40zm168 0h40v40h-40zm18.289 107.2A83.6 83.6 0 0 1 260.3 360h-8.6a83.6 83.6 0 0 1-77.992-52.8l-1.279-3.2h-34.461L144 319.081A116 116 0 0 0 251.7 392h8.6A116 116 0 0 0 368 319.081L374.032 304h-34.464Z"></svg:path>`,
})
export class CilHappyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
