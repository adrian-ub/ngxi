import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAnalysisIcon],svg[icon-park-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 5H3.99998V17H44V5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3.99998 41.0301L16.1756 28.7293L22.7549 35.0301L30.7982 27L35.2786 31.368"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 16.1719V42.1719"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M3.99998 16.1719V30.1719"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13.0155 43H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 11H38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M9.99998 10.9966H11"></svg:path></svg:g>`,
})
export class IconParkAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
