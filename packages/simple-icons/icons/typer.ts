import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTyperIcon],svg[simple-icons-typer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.818 3.646H2.182C.982 3.646 0 4.483 0 5.505v3.707h2.182V5.486h19.636v13.036H2.182v-3.735H0v3.726c0 1.022.982 1.84 2.182 1.84h19.636c1.2 0 2.182-.818 2.182-1.84V5.505c0-1.032-.982-1.859-2.182-1.859m-10.909 12.07L15.273 12l-4.364-3.717v2.787H0v1.859h10.909z"></svg:path>`
})
export class SimpleIconsTyperIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
