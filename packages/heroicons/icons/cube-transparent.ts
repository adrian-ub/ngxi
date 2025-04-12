import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsCubeTransparentIcon],svg[heroicons-cube-transparent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 7.5l-2.25-1.312M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.312M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.312M12 12.75l-2.25-1.312M12 12.75V15m0 6.75l2.25-1.312M12 21.75V19.5m0 2.25l-2.25-1.312m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></svg:path>`
})
export class HeroiconsCubeTransparentIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
