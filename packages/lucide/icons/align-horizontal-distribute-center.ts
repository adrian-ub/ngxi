import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignHorizontalDistributeCenterIcon],svg[lucide-align-horizontal-distribute-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="14" x="4" y="5" rx="2"></svg:rect><svg:rect width="6" height="10" x="14" y="7" rx="2"></svg:rect><svg:path d="M17 22v-5m0-10V2M7 22v-3M7 5V2"></svg:path></svg:g>`
})
export class LucideAlignHorizontalDistributeCenterIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
