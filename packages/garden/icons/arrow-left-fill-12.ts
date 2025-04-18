import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowLeftFill12Icon],svg[garden-arrow-left-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1 6.5h10.5"></svg:path><svg:path fill="currentColor" d="M4.5 11a.47.47 0 0 1-.35-.15L.5 7.21a.996.996 0 0 1 0-1.41l3.65-3.65c.14-.15.35-.19.54-.11S5 2.3 5 2.5v8c0 .2-.12.38-.31.46c-.06.03-.13.04-.19.04"></svg:path>`,
})
export class GardenArrowLeftFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
