import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFontFamilyOutlineIcon],svg[flowbite-font-family-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.579 19l4.297-10.93a.11.11 0 0 1 .205 0L19.378 19m-8.8 0h-1.1m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3 16l1.567-3.985m0 0l2.73-6.945a.11.11 0 0 1 .205 0l2.504 6.945z"></svg:path>`,
})
export class FlowbiteFontFamilyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
