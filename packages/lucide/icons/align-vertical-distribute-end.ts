import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignVerticalDistributeEndIcon],svg[lucide-align-vertical-distribute-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="14" height="6" x="5" y="14" rx="2"></svg:rect><svg:rect width="10" height="6" x="7" y="4" rx="2"></svg:rect><svg:path d="M2 20h20M2 10h20"></svg:path></svg:g>`
})
export class LucideAlignVerticalDistributeEndIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
