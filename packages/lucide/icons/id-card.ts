import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideIdCardIcon],svg[lucide-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 10h2m-2 4h2M6.17 15a3 3 0 0 1 5.66 0"></svg:path><svg:circle cx="9" cy="11" r="2"></svg:circle><svg:rect width="20" height="14" x="2" y="5" rx="2"></svg:rect></svg:g>`
})
export class LucideIdCardIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
