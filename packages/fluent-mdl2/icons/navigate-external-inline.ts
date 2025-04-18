import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NavigateExternalInlineIcon],svg[fluent-mdl2-navigate-external-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 1408h128v640H256V640h640v128H384v1152h1152zm128-768v640h-128V859l-595 594l-90-90l594-595h-421V640z"></svg:path>`,
})
export class FluentMdl2NavigateExternalInlineIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
