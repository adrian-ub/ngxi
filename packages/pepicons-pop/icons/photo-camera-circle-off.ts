import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPhotoCameraCircleOffIcon],svg[pepicons-pop-photo-camera-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8.696 8.078L8.398 9H7.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-.899l-.297-.922A3 3 0 0 0 14.449 6H11.55a3 3 0 0 0-2.855 2.078M7.5 11h2.354l.745-2.307A1 1 0 0 1 11.551 8h2.898a1 1 0 0 1 .951.693L16.145 11H18.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 14.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopPhotoCameraCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
