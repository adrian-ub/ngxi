import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Header4Icon],svg[fluent-mdl2-header-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024V384h128v1408H768v-640H128v640H0V384h128v640zm1152 256h128v128h-128v384h-128v-384h-640v-85l671-939h97zm-128 0V648l-452 632z"></svg:path>`,
})
export class FluentMdl2Header4Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
