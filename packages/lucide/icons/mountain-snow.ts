import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMountainSnowIcon],svg[lucide-mountain-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m8 3l4 8l5-5l5 15H2z"></svg:path><svg:path d="M4.14 15.08q3.93-2.355 7.86.42c2.74 1.94 5.49 2 8.23.19"></svg:path></svg:g>`
})
export class LucideMountainSnowIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
