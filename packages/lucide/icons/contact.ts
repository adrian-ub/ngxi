import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideContactIcon],svg[lucide-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2"></svg:path><svg:circle cx="12" cy="11" r="3"></svg:circle><svg:rect width="18" height="18" x="3" y="4" rx="2"></svg:rect></svg:g>`
})
export class LucideContactIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
