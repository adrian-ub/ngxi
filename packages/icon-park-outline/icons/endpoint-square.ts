import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEndpointSquareIcon],svg[icon-park-outline-endpoint-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 40H6V8h36"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:path d="M42 24H27"></svg:path></svg:g>`,
})
export class IconParkOutlineEndpointSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
