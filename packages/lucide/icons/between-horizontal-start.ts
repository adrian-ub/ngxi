import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBetweenHorizontalStartIcon],svg[lucide-between-horizontal-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="13" height="7" x="8" y="3" rx="1"></svg:rect><svg:path d="m2 9l3 3l-3 3"></svg:path><svg:rect width="13" height="7" x="8" y="14" rx="1"></svg:rect></svg:g>`
})
export class LucideBetweenHorizontalStartIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
