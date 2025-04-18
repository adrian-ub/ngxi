import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ExploreContentSingleIcon],svg[fluent-mdl2-explore-content-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 256v1664H128V256zm-128 128H256v1408h1408zm-768 768H512v-128h384V640h128v384h384v128h-384v384H896z"></svg:path>`,
})
export class FluentMdl2ExploreContentSingleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
