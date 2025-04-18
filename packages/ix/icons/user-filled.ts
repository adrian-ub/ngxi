import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUserFilledIcon],svg[ix-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 213.334c47.128 0 85.333-38.205 85.333-85.334c0-47.128-38.205-85.333-85.333-85.333S170.666 80.872 170.666 128s38.205 85.334 85.334 85.334M298.666 256h-85.333c-70.692 0-128 57.308-128 128v85.334h341.333V384c0-70.692-57.307-128-128-128"></svg:path>`,
})
export class IxUserFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
