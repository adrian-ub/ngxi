import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlarmLineIcon],svg[ri-alarm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 1 0-18a9 9 0 0 1 0 18m0-2a7 7 0 1 0 0-14a7 7 0 0 0 0 14m1-7h3v2h-5V8h2zM1.747 6.283l3.536-3.536l1.414 1.414L3.16 7.697zm16.97-3.536l3.536 3.536l-1.414 1.414l-3.536-3.536z"></svg:path>`,
})
export class RiAlarmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
