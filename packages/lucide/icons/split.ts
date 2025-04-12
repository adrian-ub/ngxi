import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSplitIcon],svg[lucide-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 3h5v5M8 3H3v5"></svg:path><svg:path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3m12 6l6-6"></svg:path></svg:g>`
})
export class LucideSplitIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
