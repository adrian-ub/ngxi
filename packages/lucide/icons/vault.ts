import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVaultIcon],svg[lucide-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:path d="m7.9 7.9l2.7 2.7"></svg:path><svg:circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></svg:circle><svg:path d="m13.4 10.6l2.7-2.7"></svg:path><svg:circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:path d="m7.9 16.1l2.7-2.7"></svg:path><svg:circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></svg:circle><svg:path d="m13.4 13.4l2.7 2.7"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`
})
export class LucideVaultIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
