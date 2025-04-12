import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNanostoresIcon],svg[simple-icons-nanostores-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.708 24L.6 14.822l7.679-2.995l11.235 7.867zM10.292 0L23.4 9.178l-7.679 2.995L4.486 4.306z"></svg:path>`
})
export class SimpleIconsNanostoresIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
