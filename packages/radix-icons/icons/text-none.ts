import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsTextNoneIcon],svg[radix-icons-text-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.354 2.354a.5.5 0 0 0-.708-.708l-.717.718a.45.45 0 0 0-.429-.314h-8a.45.45 0 0 0-.45.45v2a.45.45 0 1 0 .9 0V2.95h3v4.393l-5.304 5.303a.5.5 0 0 0 .708.708L6.95 8.757v3.293H5.754a.45.45 0 1 0 0 .9h3.5a.45.45 0 0 0 0-.9H8.05V7.657zM8.05 6.243l3-3V2.95h-3z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsTextNoneIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
