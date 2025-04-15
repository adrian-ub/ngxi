import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsPinBottomIcon],svg[radix-icons-pin-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 13.95a.45.45 0 0 0 0-.9h-12a.45.45 0 1 0 0 .9zm-2.432-6.382a.45.45 0 1 0-.636-.636L7.95 9.414V1.5a.45.45 0 0 0-.9 0v7.914L4.568 6.932a.45.45 0 1 0-.636.636l3.25 3.25a.45.45 0 0 0 .636 0z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsPinBottomIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
