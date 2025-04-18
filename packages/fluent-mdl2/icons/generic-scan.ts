import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GenericScanIcon],svg[fluent-mdl2-generic-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 640V128h512v128H128v384zm128 768v384h384v128H0v-512zm1792 384v-384h128v512h-512v-128zM1536 128h512v512h-128V256h-384zM384 1408V640h128v768zm384 0V640h128v768zm384 0V640h128v768zm512-768v768h-128V640z"></svg:path>`,
})
export class FluentMdl2GenericScanIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
