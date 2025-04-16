import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidNewspaperIcon],svg[heroicons-solid-newspaper-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2H4a2 2 0 0 1-2-2zm3 1h6v4H5zm6 6H5v2h6z" clip-rule="evenodd"></svg:path><svg:path d="M15 7h1a2 2 0 0 1 2 2v5.5a1.5 1.5 0 0 1-3 0z"></svg:path></svg:g>`,
})
export class HeroiconsSolidNewspaperIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
