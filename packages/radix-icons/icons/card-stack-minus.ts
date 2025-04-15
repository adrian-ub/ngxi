import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsCardStackMinusIcon],svg[radix-icons-card-stack-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM1 9.5a1.5 1.5 0 0 0 1 1.415v.585A1.5 1.5 0 0 0 3.5 13h8a1.5 1.5 0 0 0 1.5-1.5v-.585A1.5 1.5 0 0 0 14 9.5v-6A1.5 1.5 0 0 0 12.5 2h-10A1.5 1.5 0 0 0 1 3.5zm11 2V11H3v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5M5.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsCardStackMinusIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
