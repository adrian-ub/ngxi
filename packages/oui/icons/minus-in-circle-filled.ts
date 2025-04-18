import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMinusInCircleFilledIcon],svg[oui-minus-in-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 0C11.636 0 15 3.364 15 7.5S11.636 15 7.5 15S0 11.636 0 7.5S3.364 0 7.5 0m-4 7a.5.5 0 0 0 0 1h8a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class OuiMinusInCircleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
