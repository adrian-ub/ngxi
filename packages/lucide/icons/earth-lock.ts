import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideEarthLockIcon],svg[lucide-earth-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 3.34V5a3 3 0 0 0 3 3m1 13.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05m19.49 4H17a2 2 0 0 0-2 2v4.54"></svg:path><svg:path d="M12 2a10 10 0 1 0 9.54 13M20 6V4a2 2 0 1 0-4 0v2"></svg:path><svg:rect width="8" height="5" x="14" y="6" rx="1"></svg:rect></svg:g>`
})
export class LucideEarthLockIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
