import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSuccessFilledIcon],svg[ix-success-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m80.336 137.114l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"></svg:path>`,
})
export class IxSuccessFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
