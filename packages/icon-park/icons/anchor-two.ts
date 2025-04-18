import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAnchorTwoIcon],svg[icon-park-anchor-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 24H4C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24H38"></svg:path><svg:path d="M24 44V14"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkAnchorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
