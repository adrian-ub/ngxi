import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelShowerHeadSolidIcon],svg[streamline-hotel-shower-head-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75.762a.75.75 0 0 0-1.5 0v1.315A4.5 4.5 0 0 0 2.5 6.514a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5a4.5 4.5 0 0 0-3.75-4.437zM5 8.488a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m-.75 3.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm2.75-.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m4.25.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM9 8.488a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelShowerHeadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
