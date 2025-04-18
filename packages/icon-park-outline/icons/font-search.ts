import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFontSearchIcon],svg[icon-park-outline-font-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:circle cx="22.834" cy="22.834" r="17" stroke-linejoin="round"></svg:circle><svg:path d="m35 35l6 6"></svg:path><svg:path stroke-linejoin="round" d="M23 17v14m-5-14h10"></svg:path></svg:g>`,
})
export class IconParkOutlineFontSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
