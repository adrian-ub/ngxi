import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPlaycanvasIcon],svg[simple-icons-playcanvas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.115 0l-.002 3.414l5.823 3.41l-5.82 3.414l-.003 3.412l11.774-6.826zm11.77 10.35L6.113 17.174L17.887 24l-.002-3.414l-5.82-3.412l5.822-3.412z"></svg:path>`
})
export class SimpleIconsPlaycanvasIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
