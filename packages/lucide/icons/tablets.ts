import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTabletsIcon],svg[lucide-tablets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="7" cy="7" r="5"></svg:circle><svg:circle cx="17" cy="17" r="5"></svg:circle><svg:path d="M12 17h10M3.46 10.54l7.08-7.08"></svg:path></svg:g>`
})
export class LucideTabletsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
