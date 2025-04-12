import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGoalIcon],svg[lucide-goal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13V2l8 4l-8 4"></svg:path><svg:path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></svg:path><svg:path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></svg:path></svg:g>`
})
export class LucideGoalIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
