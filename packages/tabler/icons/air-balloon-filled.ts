import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAirBalloonFilledIcon],svg[tabler-air-balloon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM12 1a7 7 0 0 1 7 7c0 4.185-3.297 9-7 9s-7-4.815-7-9a7 7 0 0 1 7-7"></svg:path>`,
})
export class TablerAirBalloonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
