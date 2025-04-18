import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GridViewMediumIcon],svg[fluent-mdl2-grid-view-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 128v1664H128V128zm-128 128h-640v640h640zm-1408 0v640h640V256zm0 1408h640v-640H256zm1408 0v-640h-640v640z"></svg:path>`,
})
export class FluentMdl2GridViewMediumIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
