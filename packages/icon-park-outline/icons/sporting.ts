import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSportingIcon],svg[icon-park-outline-sporting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="8" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 18h12v16m22-16H29v26"></svg:path></svg:g>`,
})
export class IconParkOutlineSportingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
