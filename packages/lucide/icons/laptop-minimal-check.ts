import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLaptopMinimalCheckIcon],svg[lucide-laptop-minimal-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 20h20M9 10l2 2l4-4"></svg:path><svg:rect width="18" height="12" x="3" y="4" rx="2"></svg:rect></svg:g>`
})
export class LucideLaptopMinimalCheckIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
