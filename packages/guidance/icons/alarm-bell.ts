import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceAlarmBellIcon],svg[guidance-alarm-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M21.753 11.48A12.56 12.56 0 0 1 15 20.228V23.5H4V20h9m-3.5-9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm12.5 1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm-12.5 6a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17Z"></svg:path>`,
})
export class GuidanceAlarmBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
