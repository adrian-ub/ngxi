import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVorondesignIcon],svg[simple-icons-vorondesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L1.608 6v12L12 24l10.392-6V6zM8.324 5.377h3L7.5 12h-3zm6 0h3L9.676 18.624h-3zM16.5 12h3l-3.824 6.624h-3z"></svg:path>`
})
export class SimpleIconsVorondesignIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
