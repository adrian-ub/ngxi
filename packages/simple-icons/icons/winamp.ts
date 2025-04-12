import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWinampIcon],svg[simple-icons-winamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.902 0a.99.99 0 0 0-.91.604l-6.139 14.57a.636.636 0 0 0 .586.883H8.66a.99.99 0 0 0 .91-.604L15.707.883A.636.636 0 0 0 15.12 0zm3.438 7.943a.99.99 0 0 0-.91.604l-6.137 14.57c-.177.42.13.883.586.883h3.219a.99.99 0 0 0 .91-.604l6.138-14.57a.636.636 0 0 0-.586-.883z"></svg:path>`
})
export class SimpleIconsWinampIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
