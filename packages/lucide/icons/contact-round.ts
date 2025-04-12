import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContactRoundIcon],svg[lucide-contact-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 2v2m1.915 18a6 6 0 0 0-12 0M8 2v2"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:rect width="18" height="18" x="3" y="4" rx="2"></svg:rect></svg:g>`
})
export class LucideContactRoundIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
