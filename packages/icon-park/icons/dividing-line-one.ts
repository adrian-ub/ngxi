import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDividingLineOneIcon],svg[icon-park-dividing-line-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24H44"></svg:path><svg:path d="M8 10H12"></svg:path><svg:path d="M20 10H28"></svg:path><svg:path d="M36 10H40"></svg:path><svg:path d="M8 38H12"></svg:path><svg:path d="M20 38H28"></svg:path><svg:path d="M36 38H40"></svg:path></svg:g>`,
})
export class IconParkDividingLineOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
