import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAdjustFill12Icon],svg[garden-adjust-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M3.5.5v1m0 7v3m5-11v3m0 7v1"></svg:path><svg:g fill="currentColor"><svg:circle cx="8.5" cy="7" r="2"></svg:circle><svg:circle cx="3.5" cy="5" r="2"></svg:circle></svg:g>`,
})
export class GardenAdjustFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
