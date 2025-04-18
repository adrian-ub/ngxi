import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SpacerIcon],svg[fluent-mdl2-spacer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m659 1261l90-90l147 146v-293h128v293l147-146l90 90l-301 301zm237-365V603L749 749l-90-90l301-301l301 301l-90 90l-147-146v293zm1024-768v128H0V128zM0 1664h1920v128H0z"></svg:path>`,
})
export class FluentMdl2SpacerIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
