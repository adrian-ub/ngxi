import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArcDeTriompheIcon],svg[icon-park-arc-de-triomphe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 16V44H18V29C18 25.6863 20.6863 23 24 23C27.3137 23 30 25.6863 30 29V44H40V16H8Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M5 10H43V13C43 14.6569 41.6569 16 40 16H8C6.34315 16 5 14.6569 5 13V10Z"></svg:path><svg:path stroke-linecap="round" d="M5 4L43 4"></svg:path><svg:path stroke-linecap="round" d="M8 4V9"></svg:path><svg:path stroke-linecap="round" d="M40 4V9"></svg:path><svg:path stroke-linecap="round" d="M8 28L18 28"></svg:path><svg:path stroke-linecap="round" d="M30 28L40 28"></svg:path></svg:g>`,
})
export class IconParkArcDeTriompheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
