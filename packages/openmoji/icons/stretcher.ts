import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiStretcherIcon],svg[openmoji-stretcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M46.894 34.519H16v5.965h40.286V30.072z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M46.894 34.519H16v5.965h40.286V30.072z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28.315 34.052V32.31a2.12 2.12 0 0 1 2.119-2.119h11.419a2.12 2.12 0 0 1 2.118 2.119v1.742"></svg:path><svg:circle cx="24.34" cy="53.078" r="2.921" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="48.172" cy="53.078" r="2.921" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-miterlimit="10" d="M45.01 40.652L27.011 51.598m1.688-10.946L45.01 51.988m-17.749 1.09H45.25"></svg:path></svg:g>`,
})
export class OpenmojiStretcherIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
