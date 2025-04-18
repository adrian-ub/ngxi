import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStreetRoadSolidIcon],svg[streamline-street-road-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 0H3.5a.5.5 0 0 0-.487.388l-3 13A.5.5 0 0 0 .5 14h5.75v-2.154a.75.75 0 0 1 1.5 0V14h5.75a.5.5 0 0 0 .487-.612l-3-13A.5.5 0 0 0 10.5 0H7.75v2.154a.75.75 0 0 1-1.5 0zM7 5.173a.75.75 0 0 1 .75.75v2.154a.75.75 0 0 1-1.5 0V5.923a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineStreetRoadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
