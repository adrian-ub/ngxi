import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsColorWheelIcon],svg[radix-icons-color-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0m2.904-4.284A5.65 5.65 0 0 1 7.1 1.84v4.693zm-.565.565A5.65 5.65 0 0 0 1.84 7.1h4.693zM6.534 7.9H1.841a5.65 5.65 0 0 0 1.375 3.319zm-2.753 3.884A5.65 5.65 0 0 0 7.1 13.16V8.466zM7.9 8.466v4.693a5.65 5.65 0 0 0 3.318-1.375zm3.884 2.752A5.65 5.65 0 0 0 13.16 7.9H8.466zM8.466 7.1h4.693a5.65 5.65 0 0 0-1.375-3.319zm2.753-3.884A5.65 5.65 0 0 0 7.9 1.84v4.693z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsColorWheelIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
