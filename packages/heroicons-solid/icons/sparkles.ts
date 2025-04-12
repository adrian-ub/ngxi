import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidSparklesIcon],svg[heroicons-solid-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H6v1a1 1 0 0 1-2 0V6H3a1 1 0 0 1 0-2h1V3a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H6v1a1 1 0 1 1-2 0v-1H3a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1m7-10a1 1 0 0 1 .967.744L14.146 7.2L17.5 9.134a1 1 0 0 1 0 1.732l-3.354 1.935l-1.18 4.455a1 1 0 0 1-1.933 0L9.854 12.8L6.5 10.866a1 1 0 0 1 0-1.732l3.354-1.935l1.18-4.455A1 1 0 0 1 12 2" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsSolidSparklesIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
