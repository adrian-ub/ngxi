import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsLetterCaseUppercaseIcon],svg[radix-icons-letter-case-uppercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.626 2.75a.5.5 0 0 1 .468.327l3.076 8.32a.5.5 0 0 1-.938.346L5.224 9.016H2.027L1.02 11.743a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .469-.326m0 1.942L4.91 8.166H2.34zm7.746-1.942a.5.5 0 0 1 .469.327l3.075 8.32a.5.5 0 1 1-.938.346L12.97 9.016H9.773l-1.008 2.727a.5.5 0 1 1-.938-.347l3.076-8.32a.5.5 0 0 1 .469-.326m0 1.942l1.284 3.474h-2.568z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsLetterCaseUppercaseIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
