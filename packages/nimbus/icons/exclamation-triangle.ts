import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusExclamationTriangleIcon],svg[nimbus-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.35 12.81L9 2.08a1.22 1.22 0 0 0-2 0L.65 12.81a1.14 1.14 0 0 0 1 1.69h12.66a1.14 1.14 0 0 0 1.04-1.69m-13.66.55L8 2.64l6.31 10.72z"></svg:path><svg:path fill="currentColor" d="M7.32 5.45h1.25V10H7.32z"></svg:path><svg:ellipse cx="7.95" cy="11.9" fill="currentColor" rx=".67" ry=".7"></svg:ellipse>`,
})
export class NimbusExclamationTriangleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
