import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidRoadSpikesIcon],svg[fa6-solid-road-spikes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 116.8c0-15.8 20.5-22 29.3-8.9L192 256V116.8c0-15.8 20.5-22 29.3-8.9L320 256V116.8c0-15.8 20.5-22 29.3-8.9L448 256V116.8c0-15.8 20.5-22 29.3-8.9l129.5 194.3c14.2 21.3-1.1 49.7-26.6 49.7l-68.2.1H64zM32 384h576c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidRoadSpikesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
