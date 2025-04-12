import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideListCheckIcon],svg[lucide-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18H3m12 0l2 2l4-4m-5-4H3m13-6H3"></svg:path>`
})
export class LucideListCheckIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
