import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderLeftIcon],svg[radix-icons-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.75 1v13H.25V1z" clip-rule="evenodd"></svg:path><svg:rect width="1" height="1" x="10" y="7" rx=".5" transform="rotate(90 10 7)"></svg:rect><svg:rect width="1" height="1" x="10" y="13" rx=".5" transform="rotate(90 10 13)"></svg:rect><svg:rect width="1" height="1" x="12" y="7" rx=".5" transform="rotate(90 12 7)"></svg:rect><svg:rect width="1" height="1" x="12" y="13" rx=".5" transform="rotate(90 12 13)"></svg:rect><svg:rect width="1" height="1" x="8" y="7" rx=".5" transform="rotate(90 8 7)"></svg:rect><svg:rect width="1" height="1" x="14" y="7" rx=".5" transform="rotate(90 14 7)"></svg:rect><svg:rect width="1" height="1" x="8" y="13" rx=".5" transform="rotate(90 8 13)"></svg:rect><svg:rect width="1" height="1" x="14" y="13" rx=".5" transform="rotate(90 14 13)"></svg:rect><svg:rect width="1" height="1" x="8" y="5" rx=".5" transform="rotate(90 8 5)"></svg:rect><svg:rect width="1" height="1" x="14" y="5" rx=".5" transform="rotate(90 14 5)"></svg:rect><svg:rect width="1" height="1" x="8" y="3" rx=".5" transform="rotate(90 8 3)"></svg:rect><svg:rect width="1" height="1" x="14" y="3" rx=".5" transform="rotate(90 14 3)"></svg:rect><svg:rect width="1" height="1" x="8" y="9" rx=".5" transform="rotate(90 8 9)"></svg:rect><svg:rect width="1" height="1" x="14" y="9" rx=".5" transform="rotate(90 14 9)"></svg:rect><svg:rect width="1" height="1" x="8" y="11" rx=".5" transform="rotate(90 8 11)"></svg:rect><svg:rect width="1" height="1" x="14" y="11" rx=".5" transform="rotate(90 14 11)"></svg:rect><svg:rect width="1" height="1" x="6" y="7" rx=".5" transform="rotate(90 6 7)"></svg:rect><svg:rect width="1" height="1" x="6" y="13" rx=".5" transform="rotate(90 6 13)"></svg:rect><svg:rect width="1" height="1" x="4" y="7" rx=".5" transform="rotate(90 4 7)"></svg:rect><svg:rect width="1" height="1" x="4" y="13" rx=".5" transform="rotate(90 4 13)"></svg:rect><svg:rect width="1" height="1" x="10" y="1" rx=".5" transform="rotate(90 10 1)"></svg:rect><svg:rect width="1" height="1" x="12" y="1" rx=".5" transform="rotate(90 12 1)"></svg:rect><svg:rect width="1" height="1" x="8" y="1" rx=".5" transform="rotate(90 8 1)"></svg:rect><svg:rect width="1" height="1" x="14" y="1" rx=".5" transform="rotate(90 14 1)"></svg:rect><svg:rect width="1" height="1" x="6" y="1" rx=".5" transform="rotate(90 6 1)"></svg:rect><svg:rect width="1" height="1" x="4" y="1" rx=".5" transform="rotate(90 4 1)"></svg:rect></svg:g>`
})
export class RadixIconsBorderLeftIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
