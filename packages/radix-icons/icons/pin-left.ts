import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsPinLeftIcon],svg[radix-icons-pin-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.05 13.5a.45.45 0 0 0 .9 0v-12a.45.45 0 1 0-.9 0zm6.382-2.432a.45.45 0 1 0 .636-.636L6.586 7.95H14.5a.45.45 0 0 0 0-.9H6.586l2.482-2.482a.45.45 0 1 0-.636-.636l-3.25 3.25a.45.45 0 0 0 0 .636z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsPinLeftIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
