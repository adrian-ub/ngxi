import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatRtlIcon],svg[zmdi-format-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 173q-35 0-60-25T43 88t25-60t60-25h171v42h-43v235h-43V45h-42v235h-43zM85 323h256v42H85v64L0 344l85-85z"></svg:path>`,
})
export class ZmdiFormatRtlIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
