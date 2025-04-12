import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRobloxstudioIcon],svg[simple-icons-robloxstudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.936 15.356l-12.11-3.244L0 18.93L18.928 24l2.68-9.99l-6.818-1.83zM5.072 0L2.394 9.992l6.816 1.83l.854-3.178l12.11 3.246L24 5.072z"></svg:path>`
})
export class SimpleIconsRobloxstudioIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
