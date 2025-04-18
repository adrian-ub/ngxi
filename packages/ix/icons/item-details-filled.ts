import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixItemDetailsFilledIcon],svg[ix-item-details-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zm-64 213.333h-128v32h128zm0-64h-128v32h128zm-170.667-64h-128v96h128zm170.667 0h-128v32h128z"></svg:path>`,
})
export class IxItemDetailsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
