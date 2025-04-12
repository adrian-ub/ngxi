import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsBars3CenterLeftIcon],svg[heroicons-bars-3-center-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"></svg:path>`
})
export class HeroiconsBars3CenterLeftIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
