import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEthLineIcon],svg[ri-eth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.149 15.304L12 20.6l3.851-5.296L12 17.674zm8.988-3.14L12 3.816l-5.137 8.348L12 15.326zM4 13l8-13l8 13l-8 11z"></svg:path>`,
})
export class RiEthLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
