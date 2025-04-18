import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFaceIcon],svg[cil-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240s240-107.452 240-240S388.548 16 256 16m147.078 387.078a207.253 207.253 0 1 1 44.589-66.125a207.3 207.3 0 0 1-44.589 66.125"></svg:path><svg:path fill="currentColor" d="M128 192h40v40h-40zm208 0h40v40h-40zM232 306.948a5 5 0 0 1 .194-1.387L264 194.241V168h-32v21.759l-30.574 107.009A37.052 37.052 0 0 0 237.052 344H296v-32h-58.948a5.057 5.057 0 0 1-5.052-5.052"></svg:path>`,
})
export class CilFaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
