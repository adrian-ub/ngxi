import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShieldFill12Icon],svg[garden-shield-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12c-.81 0-5-2.78-5-8V2.5c0-.2.12-.38.3-.46l4.5-2a.5.5 0 0 1 .41 0l4.5 2c.17.08.29.26.29.46V4c0 5.22-4.19 8-5 8m.05-1"></svg:path>`,
})
export class GardenShieldFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
