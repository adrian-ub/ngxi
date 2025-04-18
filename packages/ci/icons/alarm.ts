import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciAlarmIcon],svg[ci-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5h5m4.004-7.429L17.939 2M6.064 2L3 4.571M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class CiAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
