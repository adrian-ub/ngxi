import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBatteryChargingSolidIcon],svg[streamline-battery-charging-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.354 5.146a.5.5 0 0 1 .146.354v3a.5.5 0 0 1-.5.5h-.5v1.5a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5h.5a.5.5 0 0 1 .354.146m-5.862.009a.625.625 0 1 0-1.005-.744L4.83 6.651a.625.625 0 0 0 .503.997h1.106L5.771 8.85a.625.625 0 1 0 1.093.607l1.182-2.13a.625.625 0 0 0-.546-.93h-.928z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBatteryChargingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
