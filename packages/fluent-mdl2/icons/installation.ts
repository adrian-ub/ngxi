import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InstallationIcon],svg[fluent-mdl2-installation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1664h128v384H128v-384h128v256h1408zm-147-531l-557 557l-557-557l90-90l403 402V128h128v1317l403-402z"></svg:path>`,
})
export class FluentMdl2InstallationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
