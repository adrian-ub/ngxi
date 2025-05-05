import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSphereIcon],svg[picon-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m4-3Q1 1 1 4q1-2 3-2"></svg:path>`,
})
export class PiconSphereIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
