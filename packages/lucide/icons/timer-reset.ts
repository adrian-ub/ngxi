import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTimerResetIcon],svg[lucide-timer-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 2h4m-2 12v-4m-8 3a8 8 0 0 1 8-7a8 8 0 1 1-5.3 14L4 17.6"></svg:path><svg:path d="M9 17H4v5"></svg:path></svg:g>`
})
export class LucideTimerResetIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
