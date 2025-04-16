import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChevronLeftSolidIcon],svg[heroicons-chevron-left-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsChevronLeftSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
