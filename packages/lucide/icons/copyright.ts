import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCopyrightIcon],svg[lucide-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M14.83 14.83a4 4 0 1 1 0-5.66"></svg:path></svg:g>`
})
export class LucideCopyrightIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
