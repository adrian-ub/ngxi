import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChevronDoubleLeftIcon],svg[heroicons-chevron-double-left-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.75 4.5l-7.5 7.5l7.5 7.5m-6-15L5.25 12l7.5 7.5"></svg:path>`,
})
export class HeroiconsChevronDoubleLeftIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
