import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShuffleTracksButtonIcon],svg[openmoji-shuffle-tracks-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m40.377 40.458l6.91 6.934c1.614 1.619 4.095 2.566 6.724 2.566h12.775M5 21.958h12.775c2.629 0 5.11.948 6.724 2.567l7.023 7.047M5 49.958h12.775c2.629 0 5.11-.947 6.724-2.566l22.788-22.867c1.614-1.62 4.095-2.567 6.724-2.567h12.775m0 0L58.6 13.744m0 16.428l8.186-8.214m0 28L58.6 41.744m0 16.428l8.186-8.214"></svg:path>`,
})
export class OpenmojiShuffleTracksButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
