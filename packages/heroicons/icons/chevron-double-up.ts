import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChevronDoubleUpIcon],svg[heroicons-chevron-double-up-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.5 18.75l7.5-7.5l7.5 7.5"></svg:path><svg:path d="m4.5 12.75l7.5-7.5l7.5 7.5"></svg:path></svg:g>`,
})
export class HeroiconsChevronDoubleUpIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
