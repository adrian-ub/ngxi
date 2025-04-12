import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTomlIcon],svg[simple-icons-toml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.014 0h5.34v2.652H2.888v18.681h2.468V24H.015zm17.622 5.049v2.78h-4.274v12.935h-3.008V7.83H6.059V5.05zM23.986 24h-5.34v-2.652h2.467V2.667h-2.468V0h5.34v24Z"></svg:path>`
})
export class SimpleIconsTomlIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
