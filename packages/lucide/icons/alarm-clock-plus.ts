import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlarmClockPlusIcon],svg[lucide-alarm-clock-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="13" r="8"></svg:circle><svg:path d="M5 3L2 6m20 0l-3-3M6.38 18.7L4 21m13.64-2.33L20 21m-8-11v6m-3-3h6"></svg:path></svg:g>`
})
export class LucideAlarmClockPlusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
