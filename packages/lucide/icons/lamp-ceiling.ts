import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLampCeilingIcon],svg[lucide-lamp-ceiling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v5M6 7h12l4 9H2zm3.17 9a3 3 0 1 0 5.66 0"></svg:path>`
})
export class LucideLampCeilingIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
