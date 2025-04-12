import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideReplaceAllIcon],svg[lucide-replace-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-18a2 2 0 0 1 2-2m0 8a2 2 0 0 1-2-2m6 6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-20a2 2 0 0 1 2 2m0 4a2 2 0 0 1-2 2M3 7l3 3l3-3"></svg:path><svg:path d="M6 10V5a3 3 0 0 1 3-3h1"></svg:path><svg:rect width="8" height="8" x="2" y="14" rx="2"></svg:rect></svg:g>`
})
export class LucideReplaceAllIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
