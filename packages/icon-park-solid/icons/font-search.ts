import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFontSearchIcon],svg[icon-park-solid-font-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSFontSearch0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:circle cx="22.834" cy="22.834" r="17" fill="#fff" stroke="#fff" stroke-linejoin="round"></svg:circle><svg:path stroke="#fff" d="m35 35l6 6"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M23 17v14m-5-14h10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSFontSearch0)"></svg:path>`,
})
export class IconParkSolidFontSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
