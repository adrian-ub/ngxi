import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAssemblyLineIcon],svg[icon-park-assembly-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="16" cy="10" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 38H13.0004C9.00037 38 6.00037 35.0833 6 31C5.99963 26.9167 9.00037 24 13.0004 24H20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.0003 24H34.9997C38.9997 24 41.9996 21.0833 42 17C42.0004 12.9167 38.9997 10 34.9997 10H20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 10L12 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 38H42"></svg:path><svg:circle cx="32" cy="38" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkAssemblyLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
