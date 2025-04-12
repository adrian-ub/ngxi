import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsShadowIcon],svg[simple-icons-shadow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12a11.97 11.97 0 0 0 3.918 8.87a4.5 4.5 0 0 1-.2-1.324a4.453 4.453 0 1 1 5.891 4.216Q10.77 23.998 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0"></svg:path>`
})
export class SimpleIconsShadowIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
