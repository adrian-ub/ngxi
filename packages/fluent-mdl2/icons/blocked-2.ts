import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Blocked2Icon],svg[fluent-mdl2-blocked-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 0q132 0 255 34t229 97t194 150t150 194t97 230t35 255t-34 255t-97 229t-150 194t-194 150t-230 97t-255 35t-255-34t-229-97t-194-150t-150-194t-97-229T0 960q0-132 34-255t97-229t150-194t194-150t229-97T960 0m0 1792q115 0 221-29t199-84t168-130t130-168t84-199t30-222q0-115-29-221t-84-199t-130-168t-168-130t-199-84t-222-30q-115 0-221 29t-199 84t-168 130t-130 168t-84 199t-30 222q0 115 29 221t84 199t130 168t168 130t199 84t222 30M384 896h1152v128H384z"></svg:path>`,
})
export class FluentMdl2Blocked2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
