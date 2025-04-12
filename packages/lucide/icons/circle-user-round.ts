import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCircleUserRoundIcon],svg[lucide-circle-user-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 20a6 6 0 0 0-12 0"></svg:path><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`
})
export class LucideCircleUserRoundIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
