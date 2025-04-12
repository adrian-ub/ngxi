import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVolleyballIcon],svg[lucide-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4M12 12a12.6 12.6 0 0 1-8.7 5m13.5-3.4a16.55 16.55 0 0 1-9 7.5"></svg:path><svg:path d="M20.7 17a12.8 12.8 0 0 0-8.7-5a13.3 13.3 0 0 1 0-10M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`
})
export class LucideVolleyballIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
