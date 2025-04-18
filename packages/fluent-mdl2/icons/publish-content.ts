import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PublishContentIcon],svg[fluent-mdl2-publish-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 347L493 749l-90-90l557-557l557 557l-90 90l-403-402v1317H896zm768 1317h128v384H128v-384h128v256h1408z"></svg:path>`,
})
export class FluentMdl2PublishContentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
