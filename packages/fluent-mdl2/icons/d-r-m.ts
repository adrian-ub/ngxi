import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DRMIcon],svg[fluent-mdl2-d-r-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 0q132 0 255 34t229 97t194 150t150 194t97 230t35 255t-34 255t-97 229t-150 194t-194 150t-230 97t-255 35t-255-34t-229-97t-194-150t-150-194t-97-229T0 960q0-132 34-255t97-229t150-194t194-150t229-97T960 0m576 896H384v128h1152z"></svg:path>`,
})
export class FluentMdl2DRMIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
