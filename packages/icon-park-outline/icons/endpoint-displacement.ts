import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEndpointDisplacementIcon],svg[icon-park-outline-endpoint-displacement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0m0 0h11m0 0l-4-4m4 4l-4 4"></svg:path><svg:path d="M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 38a5 5 0 1 0 10 0a5 5 0 0 0-10 0m0 0H21m0 0l4-4m-4 4l4 4"></svg:path><svg:path d="M33 11a5 5 0 1 0 10 0a5 5 0 0 0-10 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 16a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0 0v11m0 0l4-4m-4 4l-4-4"></svg:path><svg:path d="M5 37a5 5 0 1 1 10 0a5 5 0 0 1-10 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 32a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 0V21m0 0l4 4m-4-4l-4 4"></svg:path></svg:g>`,
})
export class IconParkOutlineEndpointDisplacementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
