import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleCommunity24FilledIcon],svg[fluent-people-community-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 6.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m14 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-9.75 6a1.75 1.75 0 0 0-1.75 1.75v3.75a4.5 4.5 0 1 0 9 0v-3.75A1.75 1.75 0 0 0 14.75 11zm-2.64.978q-.109.369-.11.772v3.75a5.49 5.49 0 0 0 2.035 4.272a4.5 4.5 0 0 1-5.763-3.107l-.712-2.656a1.75 1.75 0 0 1 1.237-2.144zm8.855 8.793a5.49 5.49 0 0 0 2.035-4.27v-3.75q-.001-.406-.11-.774l3.314.888a1.75 1.75 0 0 1 1.237 2.143l-.712 2.657a4.5 4.5 0 0 1-5.764 3.106"></svg:path>`,
})
export class FluentPeopleCommunity24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
