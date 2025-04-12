import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideAlignRightIcon],svg[lucide-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12H9m12 6H7M21 6H3"></svg:path>`
})
export class LucideAlignRightIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
