import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSandwichIcon],svg[lucide-sandwich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2.37 11.223l8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"></svg:path><svg:path d="m6.67 15l6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"></svg:path><svg:rect width="20" height="4" x="2" y="11" rx="1"></svg:rect></svg:g>`
})
export class LucideSandwichIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
