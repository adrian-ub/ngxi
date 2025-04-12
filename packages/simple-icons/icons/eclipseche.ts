import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEclipsecheIcon],svg[simple-icons-eclipseche-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L1.604 6.021v7.452L12 7.494l3.941 2.254l6.455-3.727zm10.396 10.527L12 16.506l-7.334-4.217l-3.062 1.76v3.93L12 24l10.396-6.021z"></svg:path>`
})
export class SimpleIconsEclipsecheIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
