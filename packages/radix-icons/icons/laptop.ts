import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsLaptopIcon],svg[radix-icons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4.25A.25.25 0 0 1 2.25 4h10.5a.25.25 0 0 1 .25.25v7.25H2zM2.25 3C1.56 3 1 3.56 1 4.25V12H0v.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V12h-1V4.25C14 3.56 13.44 3 12.75 3z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsLaptopIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
