import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCellularUnavailable24RegularIcon],svg[fluent-cellular-unavailable-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3.75 18.004a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.101L3 20.254v-1.5a.75.75 0 0 1 .75-.75zm8-6a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.101L11 20.254v-7.5a.75.75 0 0 1 .75-.75zm4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.101L15 20.254v-10.5a.75.75 0 0 1 .75-.75zm4 10.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5zM7.75 15a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.101L7 20.25V15.75a.75.75 0 0 1 .75-.75zm11.984-8.996a.744.744 0 0 1 .74.641l.009.102l.017 10.885a.746.746 0 0 1-.734.758a.744.744 0 0 1-.74-.641l-.009-.102L19 6.76a.746.746 0 0 1 .734-.757z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentCellularUnavailable24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
