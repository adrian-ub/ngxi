import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBatteryCheckSolidIcon],svg[mynaui-battery-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 8c0-.967.784-1.75 1.75-1.75h14c.966 0 1.75.783 1.75 1.75v8A1.75 1.75 0 0 1 18 17.75H4A1.75 1.75 0 0 1 2.25 16zm11.102 2.94a.75.75 0 0 0-1.216-.88l-1.713 2.372l-.599-.684a.75.75 0 1 0-1.128.988l1.034 1.181a.974.974 0 0 0 1.522-.07zm8.398.06a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiBatteryCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
