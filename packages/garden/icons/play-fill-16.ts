import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlayFill16Icon],svg[garden-play-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15.79c-.13 0-.26-.03-.38-.08a.98.98 0 0 1-.62-.92V1.21a1 1 0 0 1 .62-.93C6 .12 6.42.21 6.71.5l6.44 6.44c.58.58.58 1.54 0 2.12L6.71 15.5c-.19.19-.45.29-.71.29"></svg:path>`,
})
export class GardenPlayFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
