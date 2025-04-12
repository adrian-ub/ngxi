import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidBookmarkSlashIcon],svg[heroicons-solid-bookmark-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.25V6.182l12.577 12.577L10 16.082l-5.925 2.844A.75.75 0 0 1 3 18.25ZM17 3.517v10.301L4.568 1.386c.116-.035.237-.06.362-.076a41.401 41.401 0 0 1 10.14 0A2.213 2.213 0 0 1 17 3.517ZM3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06L3.28 2.22Z"></svg:path>`
})
export class HeroiconsSolidBookmarkSlashIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
