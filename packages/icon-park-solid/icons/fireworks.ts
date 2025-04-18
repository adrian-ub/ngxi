import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidFireworksIcon],svg[icon-park-solid-fireworks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m6 42l8.674-24.736L31 34.038z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m23 19l5-5q4-4 1-7m0 18l5-5q5-5 10 0"></svg:path><svg:path fill="currentColor" d="M20 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m22-1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 23a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconParkSolidFireworksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
