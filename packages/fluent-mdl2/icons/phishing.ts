import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PhishingIcon],svg[fluent-mdl2-phishing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384v1280l-128-230V648l-896 447l-896-447v888h845l-64 128H0V384zM1024 953l881-441H143zm384 455h128v320h-128zm0 384h128v128h-128zm64-896l576 1152H896zm395 1040l-395-790l-395 790z"></svg:path>`,
})
export class FluentMdl2PhishingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
