import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsCheckCircledIcon],svg[radix-icons-check-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 1 0 0 13.246A6.623 6.623 0 0 0 7.5.877M1.827 7.5a5.673 5.673 0 1 1 11.346 0a5.673 5.673 0 0 1-11.346 0m8.332-1.962a.5.5 0 0 0-.818-.576L6.52 8.972L5.357 7.787a.5.5 0 0 0-.714.7L6.227 10.1a.5.5 0 0 0 .765-.062z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsCheckCircledIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
