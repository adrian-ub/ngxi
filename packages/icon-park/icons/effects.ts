import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEffectsIcon],svg[icon-park-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"></svg:path><svg:path d="M36.1777 36.0537L44.1777 44.0179"></svg:path></svg:g>`,
})
export class IconParkEffectsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
