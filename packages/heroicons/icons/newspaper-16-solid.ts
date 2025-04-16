import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsNewspaper16SolidIcon],svg[heroicons-newspaper-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h8a2 2 0 0 1-2-2zM4 4h4v2H4zm4 3.5H4V9h4zm-4 3h4V12H4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 5h-1.5v6.25a1.25 1.25 0 1 0 2.5 0V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class HeroiconsNewspaper16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
