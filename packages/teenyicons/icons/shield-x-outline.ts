import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsShieldXOutlineIcon],svg[teenyicons-shield-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m4.5 4.5l6 6m-6 0l6-6m-3-4l-7 4v.72a9.65 9.65 0 0 0 7 9.28a9.65 9.65 0 0 0 7-9.28V4.5z"></svg:path>`,
})
export class TeenyiconsShieldXOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
