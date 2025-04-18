import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEndpointFlatIcon],svg[icon-park-endpoint-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 40H23.2857C20.0414 40 7 40 7 40L7 27M43 8H23.2857C14.2914 8 7 8 7 8L7 21M43 24H10"></svg:path><svg:circle cx="7" cy="24" r="3"></svg:circle></svg:g>`,
})
export class IconParkEndpointFlatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
