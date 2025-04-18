import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilInputHdmiIcon],svg[cil-input-hdmi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 16v104H80v131.492l72 157.091V496h208v-87.417l72-157.091V120h-32V16Zm32 32h224v72h-32V80h-32v40h-32V80h-32v40h-32V80h-32v40h-32Zm256 196.508L328 401.6V464H184v-62.4l-72-157.092V152h288Z"></svg:path>`,
})
export class CilInputHdmiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
