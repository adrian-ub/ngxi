import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesModuleFourOutlineIcon],svg[bubbles-module-four-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22.5 7.5V18L12 22.5L1.5 18V7.5L12 12zM12 22.5V12M7.5 4.929L1.5 7.5m15-2.571l6 2.571M7.5 3c0 .398.474.78 1.318 1.06c.844.282 1.989.44 3.182.44c1.194 0 2.338-.158 3.182-.44c.844-.28 1.318-.662 1.318-1.06s-.474-.78-1.318-1.06c-.844-.282-1.989-.44-3.182-.44c-1.194 0-2.338.158-3.182.44C7.974 2.22 7.5 2.601 7.5 3"></svg:path><svg:path d="M7.5 3v3c0 .828 2.015 1.5 4.5 1.5s4.5-.672 4.5-1.5V3"></svg:path></svg:g>`,
})
export class BubblesModuleFourOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
