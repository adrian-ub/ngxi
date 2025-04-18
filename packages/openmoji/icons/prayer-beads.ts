import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPrayerBeadsIcon],svg[openmoji-prayer-beads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="40.467" cy="54" r="1.95"></svg:circle><svg:path fill="#F1B31C" d="m37.304 56.926l1.303-3.658l3.798.242l.317 4.418z"></svg:path><svg:path fill="#F1B31C" d="m41.562 55.217l.843 10.775l-7.124-1.185l3.784-9.81"></svg:path><svg:circle cx="40.467" cy="54" r="2" fill="#FCEA2B"></svg:circle><svg:path fill="#F1B31C" d="m41.783 58.045l.622 7.947l-7.124-1.185l2.843-7.37"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-miterlimit="10" stroke-width="2" d="m41.783 58.045l.622 7.947l-7.124-1.185l2.843-7.37"></svg:path><svg:path stroke-dasharray="0 6.735 0 0 0 0" stroke-width="4" d="M47.61 12.847c1.138 11.194-2.557 14.38 7.968 15.443c10.524 1.063.696 20.042-13.976 20.042S25.24 38.08 29.412 33.906c4.174-4.174-3.118-6.26-4.31-4.174s-17.902.153-9.934-10.624s31.303-17.454 32.441-6.26"></svg:path></svg:g><svg:path fill="none" stroke="#D22F27" stroke-dasharray="0 6.735 0 0 0 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M47.61 12.847c1.138 11.194-2.557 14.38 7.968 15.443c10.524 1.063.696 20.042-13.976 20.042S25.24 38.08 29.412 33.906c4.174-4.174-3.118-6.26-4.31-4.174s-17.902.153-9.934-10.624s31.303-17.454 32.441-6.26"></svg:path>`,
})
export class OpenmojiPrayerBeadsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
