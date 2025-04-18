import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapParkIcon],svg[map-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.1 26h14.87l-4.893-13h-5.073zM9 13V9h32v4h-7.871l4.905 13H50v4H39.863l5.729 14h-5.559l-5.728-14H15.782L10.08 44H4.52l5.697-14H0v-4h12.042l4.901-13z"></svg:path>`,
})
export class MapParkIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
