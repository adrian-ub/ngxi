import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSlashdotIcon],svg[simple-icons-slashdot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.777 0L7.037 24H1.868L14.605 0zm2.354 19.801a4.107 4.107 0 0 1-4.109 4.105a4.106 4.106 0 1 1 0-8.212a4.11 4.11 0 0 1 4.109 4.107"></svg:path>`
})
export class SimpleIconsSlashdotIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
