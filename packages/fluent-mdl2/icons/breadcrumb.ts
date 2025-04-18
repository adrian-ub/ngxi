import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BreadcrumbIcon],svg[fluent-mdl2-breadcrumb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512h1536v128H256zm384 512V896h1152v128zm384 384v-128h768v128z"></svg:path>`,
})
export class FluentMdl2BreadcrumbIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
