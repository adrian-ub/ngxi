import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCloudyIcon],svg[oi-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 0A2.5 2.5 0 0 0 0 2.5c0 .39.09.74.25 1.06c.3-.21.64-.37 1-.47C1.8 1.84 3.07 1 4.5 1c-.46-.6-1.18-1-2-1m2 2C3.29 2 2.23 2.86 2 4C.9 4 0 4.9 0 6s.9 2 2 2h4.5C7.33 8 8 7.33 8 6.5c0-.65-.42-1.29-1-1.5v-.5A2.5 2.5 0 0 0 4.5 2"></svg:path>`,
})
export class OiCloudyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
