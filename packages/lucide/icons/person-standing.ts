import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucidePersonStandingIcon],svg[lucide-person-standing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="5" r="1"></svg:circle><svg:path d="m9 20l3-6l3 6M6 8l6 2l6-2m-6 2v4"></svg:path></svg:g>`
})
export class LucidePersonStandingIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
