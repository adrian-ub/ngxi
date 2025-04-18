import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingInfuseIcon],svg[cbi-ceiling-infuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.89C5.75 5.89.86 7.92.86 10.5v3c0 2.59 4.89 4.61 11.14 4.61s11.14-2.03 11.14-4.61v-3c0-2.59-4.89-4.61-11.14-4.61m0 11.22c-5.98 0-10.14-1.9-10.14-3.61S6.03 9.89 12 9.89c5.98 0 10.14 1.9 10.14 3.61S17.98 17.11 12 17.11m5.44-3.43c0 .93-2.44 1.69-5.44 1.69s-5.44-.75-5.44-1.69c0-.93 2.44-1.69 5.44-1.69s5.44.76 5.44 1.69"></svg:path>`,
})
export class CbiCeilingInfuseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
