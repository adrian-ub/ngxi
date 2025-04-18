import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Header1Icon],svg[fluent-mdl2-header-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 384v1408h-128V646q-66 59-149 90t-171 32V640q54 0 103-15t92-44t75-69t55-89l17-39zm-896 0h128v1408H896v-640H256v640H128V384h128v640h640z"></svg:path>`,
})
export class FluentMdl2Header1Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
