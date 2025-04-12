import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideForkliftIcon],svg[lucide-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12H5a2 2 0 0 0-2 2v5"></svg:path><svg:circle cx="13" cy="19" r="2"></svg:circle><svg:circle cx="5" cy="19" r="2"></svg:circle><svg:path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"></svg:path></svg:g>`
})
export class LucideForkliftIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
