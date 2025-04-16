import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidSearchCircleIcon],svg[heroicons-solid-search-circle-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-13a4 4 0 0 0-3.446 6.032l-2.261 2.26a1 1 0 1 0 1.414 1.415l2.261-2.261A4 4 0 1 0 11 5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsSolidSearchCircleIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
