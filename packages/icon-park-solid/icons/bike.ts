import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBikeIcon],svg[icon-park-solid-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10.5 42a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17M37 42a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18.997 6h9L37 33"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m11.057 33l20.625-16.237z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m11.057 33l20.625-16.237m0-1.763h8.472L42 10M8 15.974h7M15 16l3.273 10.421"></svg:path></svg:g>`,
})
export class IconParkSolidBikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
