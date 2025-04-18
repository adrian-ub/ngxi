import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBackward1Icon],svg[subway-backward-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472.8 90L298.5 192.5v-74c0-28.4-17.6-41.2-39.2-28.5L16.2 232.9c-21.6 12.7-21.6 33.4 0 46.1l243.1 143c21.6 12.7 39.2-.2 39.2-28.5v-74L472.8 422c21.6 12.7 39.2-.2 39.2-28.5v-275c0-28.4-17.6-41.2-39.2-28.5"></svg:path>`,
})
export class SubwayBackward1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
