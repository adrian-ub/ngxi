import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayIdCardIcon],svg[subway-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 394c0 23.5 19.1 42.7 42.7 42.7h426.7c23.5 0 42.7-19.1 42.7-42.7v-42.7H0zM469.3 95.3H42.7C19.1 95.3 0 114.5 0 138v170.7h512V138c0-23.5-19.1-42.7-42.7-42.7"></svg:path>`,
})
export class SubwayIdCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
