import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTomtomIcon],svg[simple-icons-tomtom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.584a4.325 4.325 0 0 1-4.32-4.32A4.325 4.325 0 0 1 12 3.944a4.325 4.325 0 0 1 4.32 4.32a4.325 4.325 0 0 1-4.32 4.32M12 0C7.443 0 3.736 3.707 3.736 8.264S7.443 16.528 12 16.528s8.264-3.707 8.264-8.264S16.557 0 12 0m0 24l3.167-5.486H8.833Z"></svg:path>`
})
export class SimpleIconsTomtomIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
