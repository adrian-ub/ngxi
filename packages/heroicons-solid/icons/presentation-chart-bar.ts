import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidPresentationChartBarIcon],svg[heroicons-solid-presentation-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3a1 1 0 0 0 0 2v8a2 2 0 0 0 2 2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414L10 15.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 15H15a2 2 0 0 0 2-2V5a1 1 0 1 0 0-2zm11 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zM8 9a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsSolidPresentationChartBarIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
