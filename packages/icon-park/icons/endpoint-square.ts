import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEndpointSquareIcon],svg[icon-park-endpoint-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 40H21.4286C18.355 40 6 40 6 40V8C6 8 12.9076 8 21.4286 8H42"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:path d="M42 24L27 24"></svg:path></svg:g>`,
})
export class IconParkEndpointSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
