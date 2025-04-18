import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnUpDown20FilledIcon],svg[fluent-arrow-turn-up-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.447 16.53a.75.75 0 0 1-1.031.392l-5.001-2.5a.75.75 0 1 1 .67-1.342l3.245 1.62l-4.32-9.818l-4.57 10.663a.75.75 0 1 1-1.378-.59L8.857 3.762c.431-1.004 1.853-1.011 2.293-.01l4.606 10.466l1.298-3.247a.75.75 0 0 1 1.392.557z"></svg:path>`,
})
export class FluentArrowTurnUpDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
