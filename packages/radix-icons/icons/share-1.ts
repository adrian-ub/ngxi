import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsShare1Icon],svg[radix-icons-share-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m.713 1.164a2.5 2.5 0 1 1 0-2.328l3.391-2.12A2.5 2.5 0 1 1 14 3.5a2.5 2.5 0 0 1-4.484 1.52l-3.53 2.207a2.5 2.5 0 0 1 0 .546l3.53 2.206a2.5 2.5 0 1 1-.411.804zM11.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsShare1Icon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
