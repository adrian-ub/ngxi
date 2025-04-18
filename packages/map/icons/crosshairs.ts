import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapCrosshairsIcon],svg[map-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 1C11.766 1 1 11.766 1 25s10.766 24 24 24s24-10.767 24-24S38.233 1 25 1m3 43.75V36h-6v8.75C13.375 43.443 6.557 36.625 5.25 28H14v-6H5.25C6.557 13.375 13.375 6.557 22 5.25V14h6V5.25C36.625 6.557 43.443 13.375 44.75 22H36v6h8.75C43.443 36.625 36.625 43.443 28 44.75"></svg:path>`,
})
export class MapCrosshairsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
