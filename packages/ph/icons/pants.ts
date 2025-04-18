import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPantsIcon],svg[ph-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m223.88 214l-22-176A16 16 0 0 0 186 24H70a16 16 0 0 0-15.88 14l-22 176A16 16 0 0 0 48 232h40.69a16 16 0 0 0 15.51-12.06l23.8-92l23.79 91.94A16 16 0 0 0 167.31 232H208a16 16 0 0 0 15.88-18M192.9 95.2A32.13 32.13 0 0 1 169 72h21ZM186 40l2 16H68l2-16ZM66 72h21a32.13 32.13 0 0 1-23.9 23.2Zm22.69 144H48l13-104.27A48.08 48.08 0 0 0 103.32 72H120v23Zm78.6-.06L136 95V72h16.68A48.08 48.08 0 0 0 195 111.73L208 216Z"></svg:path>`,
})
export class PhPantsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
