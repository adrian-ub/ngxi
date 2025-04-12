import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsH3Icon],svg[heroicons-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.906 14.626a4.52 4.52 0 0 1 .738 3.603c-.155.695-.795 1.143-1.505 1.208a15.2 15.2 0 0 1-3.639-.104m4.406-4.707a4.52 4.52 0 0 0 .738-3.603c-.155-.696-.795-1.144-1.505-1.209a15.2 15.2 0 0 0-3.639.104m4.406 4.708H18M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501"></svg:path>`
})
export class HeroiconsH3Icon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
