import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCleaningRoomIcon],svg[guidance-cleaning-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M18 20.5V20m0 .5a3 3 0 0 1-3 3h-2.5v-.25l.22-.357a12 12 0 0 0 1.78-6.29V16.5H18m0 4a3 3 0 0 0 3 3h2.5v-.25l-.22-.357a12 12 0 0 1-1.78-6.29V16.5H18m0 0V0M3.5 13.5V11a2.5 2.5 0 0 1 5 0v2.5m-6 10v-1.03a20 20 0 0 0-1.904-8.515L.5 13.75v-.25h11v.25l-.096.205A20 20 0 0 0 9.5 22.47v1.03z"></svg:path>`,
})
export class GuidanceCleaningRoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
