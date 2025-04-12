import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZincsearchIcon],svg[simple-icons-zincsearch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.723 19.748l-1.73 1.493H.678L0 18.77l10.63-9.343l.542 6.635h8.701a3.65 3.65 0 0 1-1.15 3.686M5.277 4.252l1.73-1.493h16.316L24 5.23l-10.63 9.343l-.542-6.635H4.129a3.65 3.65 0 0 1 1.148-3.686"></svg:path>`
})
export class SimpleIconsZincsearchIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
