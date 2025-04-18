import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBuildingIcon],svg[ci-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21H4a1 1 0 0 1-1-1v-7.3a1 1 0 0 1 .341-.752L5 10.5V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM9 7.329a1 1 0 0 1 .658.248l5 4.375A1 1 0 0 1 15 12.7V19h4V5H7v3.75l1.341-1.174A1 1 0 0 1 9 7.329ZM8 16h2v3h3v-5.843l-4-3.5l-4 3.5V19h3v-3Z"></svg:path>`,
})
export class CiBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
