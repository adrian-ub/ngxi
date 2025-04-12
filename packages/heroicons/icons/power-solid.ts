import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsPowerSolidIcon],svg[heroicons-power-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M6.166 5.106a.75.75 0 0 1 0 1.06a8.25 8.25 0 1 0 11.668 0a.75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788s-9.98 3.808-13.788 0s-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsPowerSolidIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
