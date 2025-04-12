import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSnapcraftIcon],svg[simple-icons-snapcraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.804 13.367V5.69l5.292 2.362zM3.701 23.514l6.49-12.22l2.847 2.843L3.7 23.514zM0 .486l13.355 4.848v8.484zm21.803 4.848H14.11L24 9.748z"></svg:path>`
})
export class SimpleIconsSnapcraftIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
