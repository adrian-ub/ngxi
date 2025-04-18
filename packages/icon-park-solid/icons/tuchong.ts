import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTuchongIcon],svg[icon-park-solid-tuchong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 39h38V28h-6v5H11V15h12V9H5z"></svg:path><svg:path stroke-linecap="round" d="M43 16v6c-8 0-14-5-14-13h6c0 4 2 7 8 7"></svg:path></svg:g>`,
})
export class IconParkSolidTuchongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
