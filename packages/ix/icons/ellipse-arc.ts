import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEllipseArcIcon],svg[ix-ellipse-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 405.334c-117.824 0-213.333-66.859-213.333-149.334c0-82.474 95.51-149.333 213.333-149.333v42.88c-96.896 0-170.666 52.608-170.666 106.453S159.147 362.624 256 362.624c96.854 0 170.582-52.778 170.603-106.602l42.73-.022c0 82.475-95.509 149.334-213.333 149.334"></svg:path>`,
})
export class IxEllipseArcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
