import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStationIcon],svg[streamline-play-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.225 13.254V.746L9.85 1.905c3.04.912 2.96 5.734 0 4.924l-1.676-.541"></svg:path><svg:path d="M8.062 13.254L12.31 11.9c2.692-.954.303-3.496-2.093-2.649l-2.155.788M4.426 8.463L1.696 9.7c-2.634 1.008-.452 3.46 2.057 2.649l.673-.274"></svg:path></svg:g>`,
})
export class StreamlinePlayStationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
