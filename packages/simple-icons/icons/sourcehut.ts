import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSourcehutIcon],svg[simple-icons-sourcehut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12s12-5.371 12-12S18.629 0 12 0m0 21.677A9.675 9.675 0 0 1 2.323 12A9.675 9.675 0 0 1 12 2.323A9.675 9.675 0 0 1 21.677 12A9.675 9.675 0 0 1 12 21.677"></svg:path>`
})
export class SimpleIconsSourcehutIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
