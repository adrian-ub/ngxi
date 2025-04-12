import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMaterialformkdocsIcon],svg[simple-icons-materialformkdocs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.029 18.772l.777 1.166l-5.417 2.709L0 16.451V4.063l5.417-2.709l5.298 7.948l7.867-5.24L24 1.354V16.84l-5.417 2.709zm2.023-13.827v13.253l3.949-1.975V2.97zM5.076 2.642L1.458 4.45L12.73 21.358l3.618-1.809z"></svg:path>`
})
export class SimpleIconsMaterialformkdocsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
