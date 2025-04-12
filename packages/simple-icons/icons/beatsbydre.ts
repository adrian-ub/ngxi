import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBeatsbydreIcon],svg[simple-icons-beatsbydre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.01 15.6a3.6 3.6 0 1 0-3.6-3.6a3.6 3.6 0 0 0 3.6 3.6m0-15.598a12 12 0 0 0-3.6.552V7.2a6 6 0 1 1-2.4 4.8V1.603a11.999 11.999 0 1 0 6-1.601"></svg:path>`
})
export class SimpleIconsBeatsbydreIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
