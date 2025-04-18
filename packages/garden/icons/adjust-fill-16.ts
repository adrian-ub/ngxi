import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAdjustFill16Icon],svg[garden-adjust-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M4.5.5v2m0 8v5m7-15v5m0 8v2"></svg:path><svg:g fill="currentColor"><svg:circle cx="4.5" cy="6.5" r="2.5"></svg:circle><svg:circle cx="11.5" cy="9.5" r="2.5"></svg:circle></svg:g>`,
})
export class GardenAdjustFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
