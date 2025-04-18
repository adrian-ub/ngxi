import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLayersIcon],svg[ix-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m421.654 327.53l47.68 23.83L256 458.026L42.667 351.36l47.68-23.83L256 410.37zm.021-95.377L469.334 256L256 362.666L42.667 256l47.659-23.847L256 315.009zM256 53.973L469.334 160.64L256 267.306L42.667 160.64zm0 47.68L138.048 160.64L256 219.605l117.931-58.965z"></svg:path>`,
})
export class IxLayersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
