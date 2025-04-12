import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSpreadshirtIcon],svg[simple-icons-spreadshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.306L7.796 2.102L0 9.898l12 12l12-12l-7.796-7.796zm0 12L3.592 9.898l4.204-4.204L12 9.898l4.184-4.184l4.204 4.204"></svg:path>`
})
export class SimpleIconsSpreadshirtIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
