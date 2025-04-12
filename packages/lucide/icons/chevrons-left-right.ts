import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsLeftRightIcon],svg[lucide-chevrons-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 7l-5 5l5 5m6-10l5 5l-5 5"></svg:path>`
})
export class LucideChevronsLeftRightIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
