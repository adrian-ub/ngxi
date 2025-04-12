import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDisc3Icon],svg[lucide-disc-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M6 12c0-1.7.7-3.2 1.8-4.2"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></svg:path></svg:g>`
})
export class LucideDisc3Icon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
