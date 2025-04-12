import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideConeIcon],svg[lucide-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20.9 18.55l-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"></svg:path><svg:ellipse cx="12" cy="19" rx="9" ry="3"></svg:ellipse></svg:g>`
})
export class LucideConeIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
