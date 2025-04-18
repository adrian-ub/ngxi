import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddWorkIcon],svg[fluent-mdl2-add-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384v1024h-128V839l-640 321v120H768v-120L128 839v697h1152v128H0V384h640V256q0-27 10-50t27-40t41-28t50-10h512q27 0 50 10t40 27t28 41t10 50v128zm-1280 0h512V256H768zm384 640H896v128h256zm768-327V512H128v185l640 319V896h512v120zm-128 839h256v128h-256v256h-128v-256h-256v-128h256v-256h128z"></svg:path>`,
})
export class FluentMdl2AddWorkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
