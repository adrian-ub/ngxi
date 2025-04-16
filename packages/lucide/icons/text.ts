import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTextIcon],svg[lucide-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18H3M17 6H3m18 6H3"></svg:path>`
})
export class LucideTextIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
