import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSwissFrancIcon],svg[lucide-swiss-franc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21V3h8M6 16h9m-5-6.5h7"></svg:path>`
})
export class LucideSwissFrancIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
