import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsIfoodIcon],svg[simple-icons-ifood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998c0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998c0-2.29-2.175-3.293-4.244-3.293m11.328 0c-4.65 0-7.184 4.149-7.184 6.998c0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293m-5.584 12.85l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.91 8.91 0 0 1 .23 14.541H0a9.6 9.6 0 0 0 8.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007l1.08 2.988l1.555-7.623l-7.234-.02Z"></svg:path>`
})
export class SimpleIconsIfoodIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
