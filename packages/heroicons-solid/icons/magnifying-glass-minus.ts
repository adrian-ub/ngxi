import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidMagnifyingGlassMinusIcon],svg[heroicons-solid-magnifying-glass-minus-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.75 8.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"></svg:path><svg:path fill-rule="evenodd" d="M9 2a7 7 0 1 0 4.391 12.452l3.329 3.328a.75.75 0 1 0 1.06-1.06l-3.328-3.329A7 7 0 0 0 9 2ZM3.5 9a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsSolidMagnifyingGlassMinusIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
