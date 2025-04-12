import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideStepBackIcon],svg[lucide-step-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 20V4m-4 16L4 12l10-8z"></svg:path>`
})
export class LucideStepBackIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
