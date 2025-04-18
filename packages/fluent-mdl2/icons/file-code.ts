import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileCodeIcon],svg[fluent-mdl2-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 549v1499H128V0h1115zm-512-37h293l-293-293zm384 1408V640h-512V128H256v1792zM749 941l-211 211l211 211l-90 90l-301-301l301-301zm512-90l301 301l-301 301l-90-90l211-211l-211-211z"></svg:path>`,
})
export class FluentMdl2FileCodeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
