import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlytogetIcon],svg[arcticons-flytoget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 14.926l6.087 6.118c.396.398.934.621 1.495.621h22.284M43.5 33.074l-6.087-6.118a2.1 2.1 0 0 0-1.495-.621H13.634"></svg:path>`,
})
export class ArcticonsFlytogetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
