import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInvertRightIcon],svg[icon-park-invert-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 15C38 22.2989 33.897 28.5832 28 31.4081C25.8653 32.4307 23.4954 33 21 33C11.6112 33 4 24.9411 4 15"></svg:path><svg:path d="M30 20L38 15L44 23"></svg:path></svg:g>`,
})
export class IconParkInvertRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
