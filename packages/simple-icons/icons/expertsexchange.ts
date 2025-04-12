import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsExpertsexchangeIcon],svg[simple-icons-expertsexchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.28.9H0L8.36 12L0 23.1h7.28L15.64 12zM24 .9h-7.28l-2.3 3.06l3.64 4.82zm-9.58 19.15l2.3 3.05H24l-5.94-7.88z"></svg:path>`
})
export class SimpleIconsExpertsexchangeIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
