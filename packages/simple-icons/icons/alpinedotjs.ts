import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAlpinedotjsIcon],svg[simple-icons-alpinedotjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 12l-5.72 5.746l-5.724-5.741l5.724-5.75zM5.72 6.254L0 12l5.72 5.746h11.44z"></svg:path>`
})
export class SimpleIconsAlpinedotjsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
