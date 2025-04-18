import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCommodityIcon],svg[icon-park-outline-commodity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.781 9.752A2 2 0 0 1 11.766 8h24.468a2 2 0 0 1 1.985 1.752l3.5 28A2 2 0 0 1 39.734 40H8.266a2 2 0 0 1-1.985-2.248z"></svg:path><svg:path stroke-linecap="round" d="M15 18s2 4 9 4s9-4 9-4"></svg:path></svg:g>`,
})
export class IconParkOutlineCommodityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
