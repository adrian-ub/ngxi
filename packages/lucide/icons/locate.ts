import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLocateIcon],svg[lucide-locate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12h3m14 0h3M12 2v3m0 14v3"></svg:path><svg:circle cx="12" cy="12" r="7"></svg:circle></svg:g>`
})
export class LucideLocateIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
