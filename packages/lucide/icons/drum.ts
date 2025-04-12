import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDrumIcon],svg[lucide-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 2l8 8m12-8l-8 8"></svg:path><svg:ellipse cx="12" cy="9" rx="10" ry="5"></svg:ellipse><svg:path d="M7 13.4v7.9m5-7.3v8m5-8.6v7.9M2 9v8a10 5 0 0 0 20 0V9"></svg:path></svg:g>`
})
export class LucideDrumIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
