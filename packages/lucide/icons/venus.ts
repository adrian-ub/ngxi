import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVenusIcon],svg[lucide-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 15v7m-3-3h6"></svg:path><svg:circle cx="12" cy="9" r="6"></svg:circle></svg:g>`
})
export class LucideVenusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
