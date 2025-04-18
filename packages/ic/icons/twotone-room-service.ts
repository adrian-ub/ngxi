import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneRoomServiceIcon],svg[ic-twotone-room-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13A7 7 0 0 0 12 9.58" opacity=".3"></svg:path><svg:path fill="currentColor" d="M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21M12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13A7 7 0 0 1 12 9.58"></svg:path>`,
})
export class IcTwotoneRoomServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
