import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsManjaroIcon],svg[simple-icons-manjaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v24h6.75V6.75h8.625V0zm8.625 8.625V24h6.75V8.625zM17.25 0v24H24V0z"></svg:path>`
})
export class SimpleIconsManjaroIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
