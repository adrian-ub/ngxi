import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsThurgauerkantonalbankIcon],svg[simple-icons-thurgauerkantonalbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.872 2.262H10.775l-6.14 9.743l6.14 9.771h11.097l-6.135-9.77zM0 .297v23.406h24V.297zm23.057 22.486L.943 22.778V1.228h22.109z"></svg:path>`
})
export class SimpleIconsThurgauerkantonalbankIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
