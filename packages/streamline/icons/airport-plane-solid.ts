import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportPlaneSolidIcon],svg[streamline-airport-plane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.98.3a1.72 1.72 0 0 0-1.217.504h-.001L8.325 3.27L3.186.894a1.72 1.72 0 0 0-2.333.89a1.7 1.7 0 0 0 .615 2.23l3.79 2.334L4.077 7.53H1.859a1.7 1.7 0 0 0 .02 3.39h1.2v1.2l.001.02a1.7 1.7 0 0 0 3.39-.02V9.924l1.182-1.183l2.335 3.79v.001a1.7 1.7 0 0 0 2.229.615a1.71 1.71 0 0 0 .891-2.28L10.73 5.675l2.465-2.437h.001A1.72 1.72 0 0 0 11.98.3" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAirportPlaneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
