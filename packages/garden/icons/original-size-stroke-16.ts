import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenOriginalSizeStroke16Icon],svg[garden-original-size-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11c-.28 0-.5.22-.5.5V13h-1.5c-.28 0-.5.22-.5.5s.25.5.5.5h2c.245 0 .5-.22.5-.5v-2a.5.5 0 0 0-.5-.5m-13 0c.28 0 .5.22.5.5V13h1.5c.28 0 .5.22.5.5s-.25.5-.5.5h-2c-.245 0-.5-.22-.5-.5v-2a.5.5 0 0 1 .5-.5M12 4H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 1v5H4V5zm2.5-1c-.28 0-.5-.22-.5-.5V2h-1.5c-.28 0-.5-.22-.5-.5s.25-.5.5-.5h2c.245 0 .5.22.5.5v2a.5.5 0 0 1-.5.5m-13 0c.28 0 .5-.22.5-.5V2h1.5c.28 0 .5-.22.5-.5S3.75 1 3.5 1h-2c-.245 0-.5.22-.5.5v2a.5.5 0 0 0 .5.5"></svg:path>`,
})
export class GardenOriginalSizeStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
