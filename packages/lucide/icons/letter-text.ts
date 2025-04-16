import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLetterTextIcon],svg[lucide-letter-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12h6m-6-6h6M3 13l3.553-7.724a.5.5 0 0 1 .894 0L11 13m-8 5h18M3.92 11h6.16"></svg:path>`
})
export class LucideLetterTextIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
