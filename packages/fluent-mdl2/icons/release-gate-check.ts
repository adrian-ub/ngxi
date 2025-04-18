import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ReleaseGateCheckIcon],svg[fluent-mdl2-release-gate-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m749 403l557 557l-557 557l-90-90l402-403H0V896h1061L659 493zm787 1136V128h-384V0h512v1411zm403-176l90 90l-557 558l-269-270l90-90l179 178z"></svg:path>`,
})
export class FluentMdl2ReleaseGateCheckIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
