import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAirlineSeatFlatAngledIcon],svg[zmdi-airline-seat-flat-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m443 241l-15 40l-264-95l45-121l182 66q34 12 49 44t3 66M0 195l15-40l405 146l-14 40l-97-34v34H139v-96zm124-41.5q-24 11.5-49 3T38.5 124t-3-49T68 38.5t49-3T153.5 68t3 49t-32.5 36.5"></svg:path>`,
})
export class ZmdiAirlineSeatFlatAngledIcon {
  readonly viewBox = input("0 0 456 384")
  readonly width = input("1.19em")
  readonly height = input("1em")
}
