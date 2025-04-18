import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TriggerApprovalIcon],svg[fluent-mdl2-trigger-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1883 768L603 2048H313l384-768H248L888 0h719l-384 768zm-310 128h-557l384-768H967L455 1152h449l-384 768h29zm456 557l-557 558l-269-270l90-90l179 178l467-466z"></svg:path>`,
})
export class FluentMdl2TriggerApprovalIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
