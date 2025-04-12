import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCoinsIcon],svg[lucide-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="8" r="6"></svg:circle><svg:path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></svg:path><svg:path d="m16.71 13.88l.7.71l-2.82 2.82"></svg:path></svg:g>`
})
export class LucideCoinsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
