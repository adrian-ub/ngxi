import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsBookmarkSlash20SolidIcon],svg[heroicons-bookmark-slash-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4.517v9.301L5.433 2.252a41.4 41.4 0 0 1 9.637.058A2.213 2.213 0 0 1 17 4.517M3 17.25V6.182l10.654 10.654L10 15.082l-5.925 2.844A.75.75 0 0 1 3 17.25m.28-15.03a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06z"></svg:path>`
})
export class HeroiconsBookmarkSlash20SolidIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
