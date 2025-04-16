import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsTv20SolidIcon],svg[heroicons-tv-20-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 5h12v7H4z"></svg:path><svg:path fill-rule="evenodd" d="M1 3.5A1.5 1.5 0 0 1 2.5 2h15A1.5 1.5 0 0 1 19 3.5v10a1.5 1.5 0 0 1-1.5 1.5H12v1.5h3.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H8V15H2.5A1.5 1.5 0 0 1 1 13.5zm16.5 0h-15v10h15z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsTv20SolidIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
