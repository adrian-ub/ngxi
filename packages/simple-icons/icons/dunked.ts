import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDunkedIcon],svg[simple-icons-dunked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.799 0v19.86A4.2 4.2 0 0 0 18 24h4.2V4.141A4.2 4.2 0 0 0 18 0zm-7.5 15.001a4.5 4.5 0 0 0-4.5 4.391v.222a4.5 4.5 0 0 0 9 0V19.4A4.5 4.5 0 0 0 6.298 15z"></svg:path>`
})
export class SimpleIconsDunkedIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
