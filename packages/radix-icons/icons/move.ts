import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsMoveIcon],svg[radix-icons-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.818.932a.45.45 0 0 0-.636 0l-1.75 1.75a.45.45 0 1 0 .636.636L7 2.386V5.5a.5.5 0 0 0 1 0V2.386l.932.932a.45.45 0 0 0 .636-.636zM8 9.5a.5.5 0 0 0-1 0v3.114l-.932-.932a.45.45 0 0 0-.636.636l1.75 1.75a.45.45 0 0 0 .636 0l1.75-1.75a.45.45 0 0 0-.636-.636L8 12.614zm1-2a.5.5 0 0 1 .5-.5h3.114l-.932-.932a.45.45 0 0 1 .636-.636l1.75 1.75a.45.45 0 0 1 0 .636l-1.75 1.75a.45.45 0 0 1-.636-.636L12.614 8H9.5a.5.5 0 0 1-.5-.5M3.318 6.068L2.386 7H5.5a.5.5 0 0 1 0 1H2.386l.932.932a.45.45 0 0 1-.636.636l-1.75-1.75a.45.45 0 0 1 0-.636l1.75-1.75a.45.45 0 1 1 .636.636" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsMoveIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
