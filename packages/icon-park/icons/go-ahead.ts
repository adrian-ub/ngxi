import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGoAheadIcon],svg[icon-park-go-ahead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33"></svg:path><svg:path d="M30 28L38 33L44 25"></svg:path></svg:g>`,
})
export class IconParkGoAheadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
