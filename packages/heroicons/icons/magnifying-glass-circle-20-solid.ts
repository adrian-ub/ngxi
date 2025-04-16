import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsMagnifyingGlassCircle20SolidIcon],svg[heroicons-magnifying-glass-circle-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 9a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"></svg:path><svg:path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M9 5a4 4 0 1 0 2.248 7.309l1.472 1.471a.75.75 0 1 0 1.06-1.06l-1.471-1.472A4 4 0 0 0 9 5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsMagnifyingGlassCircle20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
