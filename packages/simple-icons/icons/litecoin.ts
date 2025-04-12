import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLitecoinIcon],svg[simple-icons-litecoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0m-.262 3.678h2.584a.343.343 0 0 1 .33.435l-2.03 6.918l1.905-.582l-.408 1.385l-1.924.56l-1.248 4.214h6.676a.343.343 0 0 1 .328.437l-.582 2a.46.46 0 0 1-.44.33H6.733l1.723-5.822l-1.906.58l.42-1.361l1.91-.58l2.422-8.18a.456.456 0 0 1 .437-.334"></svg:path>`
})
export class SimpleIconsLitecoinIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
