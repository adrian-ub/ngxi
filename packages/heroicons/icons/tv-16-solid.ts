import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsTv16SolidIcon],svg[heroicons-tv-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5H4v4h8z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v1.5h2.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H6V12H2a1 1 0 0 1-1-1zm1.5 7.5v-7h11v7z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsTv16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
