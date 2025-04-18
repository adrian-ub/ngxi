import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiArloBaseStationIcon],svg[cbi-arlo-base-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.782 20.692V2.127H3.068v18.565h-.634V22h18.934v-1.308zm-10.6-1.814h3.494v1.057h-3.498z" class="cls-1"></svg:path>`,
})
export class CbiArloBaseStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
