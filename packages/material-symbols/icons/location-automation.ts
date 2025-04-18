import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocationAutomationIcon],svg[material-symbols-location-automation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 22l-1.4-3.1l-3.1-1.4l3.1-1.4l1.4-3.1l1.4 3.1l3.1 1.4l-3.1 1.4l-1.4 3.1ZM4 19V7l8-6l8 6v4.175q-.375-.1-.763-.138T18.476 11q-2.725 0-4.6 1.9T12 17.5q0 .375.038.75t.137.75H4Z"></svg:path>`,
})
export class MaterialSymbolsLocationAutomationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
