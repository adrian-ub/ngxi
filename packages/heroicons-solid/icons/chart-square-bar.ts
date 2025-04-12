import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidChartSquareBarIcon],svg[heroicons-solid-chart-square-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9 4a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-3 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsSolidChartSquareBarIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
