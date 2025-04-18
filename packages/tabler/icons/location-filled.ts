import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLocationFilledIcon],svg[tabler-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.891 2.006L20.997 2l.13.008l.09.016l.123.035l.107.046l.1.057l.09.067l.082.075l.052.059l.082.116l.052.096q.07.15.09.316l.005.106q0 .113-.024.22l-.035.123l-6.532 18.077A1.55 1.55 0 0 1 14 22.32a1.55 1.55 0 0 1-1.329-.747l-.065-.127l-3.352-6.702l-6.67-3.336a1.55 1.55 0 0 1-.898-1.259L1.68 10c0-.56.301-1.072.841-1.37l.14-.07l18.017-6.506l.106-.03l.108-.018z"></svg:path>`,
})
export class TablerLocationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
