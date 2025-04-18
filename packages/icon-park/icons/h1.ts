import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkH1Icon],svg[icon-park-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M25 8V40"></svg:path><svg:path d="M6 24H25"></svg:path><svg:path d="M34.2261 24L39.0001 19.0166V40"></svg:path></svg:g>`,
})
export class IconParkH1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
