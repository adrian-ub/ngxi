import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareBottomDashedScissorsIcon],svg[lucide-square-bottom-dashed-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2m-10 0H8m8 0h-2"></svg:path><svg:circle cx="8" cy="8" r="2"></svg:circle><svg:path d="M9.414 9.414L12 12m2.8 2.8L18 18"></svg:path><svg:circle cx="8" cy="16" r="2"></svg:circle><svg:path d="m18 6l-8.586 8.586"></svg:path></svg:g>`
})
export class LucideSquareBottomDashedScissorsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
