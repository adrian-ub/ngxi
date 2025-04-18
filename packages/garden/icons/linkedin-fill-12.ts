import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLinkedinFill12Icon],svg[garden-linkedin-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.8 0A1.2 1.2 0 0 1 12 1.2v9.6a1.2 1.2 0 0 1-1.2 1.2H1.2A1.2 1.2 0 0 1 0 10.8V1.2A1.2 1.2 0 0 1 1.2 0zM8.09 4.356a1.87 1.87 0 0 0-1.598.792l-.085.133h-.024v-.783H4.676v5.727h1.778V7.392c0-.747.142-1.47 1.068-1.47c.913 0 .925.854.925 1.518v2.785h1.778V7.084l-.005-.325c-.05-1.38-.456-2.403-2.13-2.403m-4.531.142h-1.78v5.727h1.78zm-.89-2.846a1.032 1.032 0 1 0 0 2.064a1.032 1.032 0 0 0 0-2.064"></svg:path>`,
})
export class GardenLinkedinFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
