import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageSquareDiffIcon],svg[lucide-message-square-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 19l-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M9 10h6m-3-3v6m-3 4h6"></svg:path>`
})
export class LucideMessageSquareDiffIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
