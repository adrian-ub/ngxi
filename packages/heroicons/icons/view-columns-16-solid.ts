import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsViewColumns16SolidIcon],svg[heroicons-view-columns-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.836 3h-3.67v10h3.67zm1.5 10H13.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-2.164zM2.5 3h2.166v10H2.5A1.5 1.5 0 0 1 1 11.5v-7A1.5 1.5 0 0 1 2.5 3"></svg:path>`
})
export class HeroiconsViewColumns16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
