import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTextCircleRectangleFilledIcon],svg[ix-text-circle-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 213.334c47.128 0 85.334-38.205 85.334-85.334c0-47.128-38.206-85.333-85.334-85.333S298.667 80.872 298.667 128s38.206 85.334 85.333 85.334M255.947 192v-64H42.667v64h31.992l10.664-21.333h42.656V320l-42.656 10.667v32h127.968v-32L170.635 320V170.667h42.656L223.956 192zm.053 64v192h192V256z"></svg:path>`,
})
export class IxTextCircleRectangleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
