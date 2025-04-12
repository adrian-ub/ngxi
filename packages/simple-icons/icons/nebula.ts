import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNebulaIcon],svg[simple-icons-nebula-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.417 9.307L0 14.693h9.167L12 23.413l2.833-8.72H24s-3.915-2.84-7.417-5.386l2.834-8.72L12 5.976C8.499 3.438 4.583.588 4.583.588z"></svg:path>`
})
export class SimpleIconsNebulaIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
