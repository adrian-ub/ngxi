import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFIcon],svg[subway-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M69.8 0C31.3 0 0 31.2 0 69.8s31.3 69.8 69.8 69.8c38.6 0 69.8-31.3 69.8-69.8C139.6 31.2 108.4 0 69.8 0m0 104.7c-19.3 0-34.9-15.6-34.9-34.9s15.6-34.9 34.9-34.9s34.9 15.6 34.9 34.9s-15.6 34.9-34.9 34.9M512 93.1V0H209.5v512h116.4V302.5h162.9v-93.1h-163V93.1z"></svg:path>`,
})
export class SubwayFIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
