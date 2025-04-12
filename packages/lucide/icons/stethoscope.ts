import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStethoscopeIcon],svg[lucide-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></svg:path><svg:path d="M8 15a6 6 0 0 0 12 0v-3"></svg:path><svg:circle cx="20" cy="10" r="2"></svg:circle></svg:g>`
})
export class LucideStethoscopeIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
