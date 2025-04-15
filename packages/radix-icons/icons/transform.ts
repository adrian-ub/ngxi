import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsTransformIcon],svg[radix-icons-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.85 1.75a.9.9 0 0 1 .9-.9h1.5a.9.9 0 0 1 .9.9v.3h6.7v-.3a.9.9 0 0 1 .9-.9h1.5a.9.9 0 0 1 .9.9v1.5a.9.9 0 0 1-.9.9h-.3v6.7h.3a.9.9 0 0 1 .9.9v1.5a.9.9 0 0 1-.9.9h-1.5a.9.9 0 0 1-.9-.9v-.3h-6.7v.3a.9.9 0 0 1-.9.9h-1.5a.9.9 0 0 1-.9-.9v-1.5a.9.9 0 0 1 .9-.9h.3v-6.7h-.3a.9.9 0 0 1-.9-.9zm2.1 2.4v6.7h.3a.9.9 0 0 1 .9.9v.3h6.7v-.3a.9.9 0 0 1 .9-.9h.3v-6.7h-.3a.9.9 0 0 1-.9-.9v-.3h-6.7v.3a.9.9 0 0 1-.9.9zm-.6-2.4h-.6v1.5h1.5v-1.5zM5.1 6a.9.9 0 0 1 .9-.9h1a.9.9 0 0 1 .9.9v1a1 1 0 0 1-.006.106A1 1 0 0 1 8 7.1h1a.9.9 0 0 1 .9.9v1a.9.9 0 0 1-.9.9H8a.9.9 0 0 1-.9-.9V8q0-.054.006-.106A1 1 0 0 1 7 7.9H6a.9.9 0 0 1-.9-.9zm1 0H6v1h1V6zM8 8h1v1H8zm-5.35 3.75h-.9v1.5h1.5v-1.5zm9.1-10h1.5v1.5h-1.5zm.9 10h-.9v1.5h1.5v-1.5z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsTransformIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
