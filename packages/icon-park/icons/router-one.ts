import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRouterOneIcon],svg[icon-park-router-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M10 24L4 38H44L38 24H10Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M10 4V24V4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 4V24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 4V24V4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 4V24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 4V24V4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 38V44H44V38"></svg:path></svg:g>`,
})
export class IconParkRouterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
