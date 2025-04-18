import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLockFilledIcon],svg[ix-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c70.49 0 128 57.695 128 128V256h42.666v213.334H85.333V256H128v-85.333c0-70.305 57.51-128 128-128m0 42.667c-47.331 0-85.334 38.996-85.334 85.333V256h170.667v-85.333c0-46.337-38.003-85.333-85.333-85.333"></svg:path>`,
})
export class IxLockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
