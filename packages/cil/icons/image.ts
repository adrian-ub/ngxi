import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilImageIcon],svg[cil-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 472h432V40H40Zm400-123.858L328.628 236.769l46.6-46.6L440 254.935ZM72 72h368v137.68l-64.769-64.77L306 214.142l-100-100l-134 134Zm0 221.4l134-134l234 234V440H72Z"></svg:path>`,
})
export class CilImageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
