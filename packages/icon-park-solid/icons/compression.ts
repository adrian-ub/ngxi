import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCompressionIcon],svg[icon-park-solid-compression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCompression0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M8.92 8.714C8.495 7.39 9.476 6 10.867 6h26.266c1.391 0 2.372 1.39 1.947 2.714C37.9 12.4 36 19.09 36 24s1.9 11.6 3.08 15.286C39.505 40.61 38.524 42 37.133 42H10.867c-1.391 0-2.372-1.39-1.947-2.714C10.1 35.6 12 28.91 12 24S10.1 12.4 8.92 8.714"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M4 15c1.5 2 2 6 2 9s-.5 7-2 9"></svg:path><svg:path stroke="#000" d="M18 15.5h12M18 24h12m-12 8h4"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M44 15c-1.5 2-2 6-2 9s.5 6 2 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCompression0)"></svg:path>`,
})
export class IconParkSolidCompressionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
