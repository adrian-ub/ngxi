import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBoatIcon],svg[simple-icons-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.081 0L5.833 17.686L17.15 13.93Zm-10.2 18.223L4.961 24H19.14l2.98-5.777z"></svg:path>`
})
export class SimpleIconsBoatIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
