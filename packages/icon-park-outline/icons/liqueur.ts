import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLiqueurIcon],svg[icon-park-outline-liqueur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M23 31L7.41 13h31.177zm0 1v10"></svg:path><svg:path d="M17 44h12"></svg:path><svg:path stroke-linejoin="round" d="M16 23h14m5-5h3a6 6 0 1 0-5.917-5M11 17.144L19.534 27M35 17.144l-8.79 10.149"></svg:path></svg:g>`,
})
export class IconParkOutlineLiqueurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
