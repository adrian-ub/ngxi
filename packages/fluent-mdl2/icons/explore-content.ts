import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ExploreContentIcon],svg[fluent-mdl2-explore-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v1792h-128V128H256V0zM128 256h1664v1664H128zm128 1536h1408V384H256zm768-768h384v128h-384v384H896v-384H512v-128h384V640h128z"></svg:path>`,
})
export class FluentMdl2ExploreContentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
