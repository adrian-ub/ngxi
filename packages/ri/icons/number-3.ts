import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNumber3Icon],svg[ri-number-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2v1.362L12.81 9.55a6.501 6.501 0 1 1-7.116 8.028l1.94-.486A4.502 4.502 0 0 0 16.5 16a4.5 4.5 0 0 0-6.505-4.03l-.228.122l-.69-1.207L14.855 4H6.5V2z"></svg:path>`,
})
export class RiNumber3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
