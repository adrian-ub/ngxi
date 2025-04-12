import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideNetworkIcon],svg[lucide-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="6" x="16" y="16" rx="1"></svg:rect><svg:rect width="6" height="6" x="2" y="16" rx="1"></svg:rect><svg:rect width="6" height="6" x="9" y="2" rx="1"></svg:rect><svg:path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></svg:path></svg:g>`
})
export class LucideNetworkIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
