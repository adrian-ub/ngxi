import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLayersFilledIcon],svg[ix-layers-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m421.654 327.53l47.68 23.83L256 458.026L42.667 351.36l47.68-23.83L256 410.37zM256 244.693L278.592 256L256 267.304L233.408 256z"></svg:path><svg:path d="M421.675 232.153L469.334 256L256 362.666L42.667 256l47.659-23.847L256 315.009z"></svg:path><svg:path d="M256 53.973L469.334 160.64L256 267.306L42.667 160.64z"></svg:path></svg:g>`,
})
export class IxLayersFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
