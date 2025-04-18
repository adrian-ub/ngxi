import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVideotvsideviewIcon],svg[arcticons-videotvsideview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.14 24.81v11.71h31.7V14.64H21.75m21.75 0v21.88m-4.66-19.66h4.66m-4.66 4.36h4.66m-4.66 4.36h4.66m-4.66 4.36h4.66m-4.66 4.36h4.66M7.14 21.83V11.48"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 14.64h7.13l4.08 7.19l4.63-10.35"></svg:path>`,
})
export class ArcticonsVideotvsideviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
