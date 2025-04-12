import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidBellSlashIcon],svg[heroicons-solid-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8c0-.26.017-.517.049-.77l7.722 7.723a33.56 33.56 0 0 1-3.722-.01a2 2 0 0 0 3.862.15l1.134 1.134a3.5 3.5 0 0 1-6.53-1.409a32.91 32.91 0 0 1-3.257-.508a.75.75 0 0 1-.515-1.076A11.448 11.448 0 0 0 4 8Zm13.266 5.9a.756.756 0 0 1-.068.116L6.389 3.207A6 6 0 0 1 16 8a11.466 11.466 0 0 0 1.258 5.234a.75.75 0 0 1 .01.666ZM3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06L3.28 2.22Z"></svg:path>`
})
export class HeroiconsSolidBellSlashIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
