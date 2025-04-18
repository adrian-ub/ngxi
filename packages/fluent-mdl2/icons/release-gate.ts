import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReleaseGateIcon],svg[fluent-mdl2-release-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m749 403l557 557l-557 557l-90-90l402-403H0V896h1061L659 493zM1152 0h512v1920h-512v-128h384V128h-384z"></svg:path>`,
})
export class FluentMdl2ReleaseGateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
