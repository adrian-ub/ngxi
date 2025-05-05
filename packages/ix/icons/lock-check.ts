import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLockCheckIcon],svg[ix-lock-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 170.667v127.999H128v128h106.667v42.667H85.333V256H128v-85.333c0-70.306 57.51-128 128-128s128 57.694 128 128M256 85.333c-47.331 0-85.333 38.996-85.333 85.334V256h170.666v-85.333c0-46.338-38.003-85.334-85.333-85.334m212.776 238.795l-31.218-24.014l-85.688 111.374l-62.966-55.11l-25.935 29.64l94.555 82.736z" clip-rule="evenodd"></svg:path>`,
})
export class IxLockCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
