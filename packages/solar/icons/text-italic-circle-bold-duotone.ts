import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextItalicCircleBoldDuotoneIcon],svg[solar-text-italic-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.667 6.25H16a.75.75 0 0 1 0 1.5h-2.09l-2.267 8.5h1.69a.75.75 0 0 1 0 1.5H8a.75.75 0 1 1 0-1.5h2.09l2.267-8.5h-1.69a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class SolarTextItalicCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
