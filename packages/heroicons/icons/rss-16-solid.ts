import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsRss16SolidIcon],svg[heroicons-rss-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0A9.75 9.75 0 0 0 2.75 3.5A.75.75 0 0 1 2 2.75m0 4.5a.75.75 0 0 1 .75-.75a6.75 6.75 0 0 1 6.75 6.75a.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25M3.5 11a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsRss16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
