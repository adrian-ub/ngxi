import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayFill12Icon],svg[garden-play-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.79c-.13 0-.26-.03-.38-.08a.98.98 0 0 1-.62-.92V1.21A1 1 0 0 1 4.71.5l4.44 4.44c.58.58.58 1.54 0 2.12L4.71 11.5c-.19.19-.45.29-.71.29"></svg:path>`,
})
export class GardenPlayFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
