import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRectangleWideIcon],svg[proicons-rectangle-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.5" height="14.5" x="2.75" y="4.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="4"></svg:rect>`,
})
export class ProiconsRectangleWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
