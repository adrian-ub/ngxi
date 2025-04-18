import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPhotoCameraCircleFilledIcon],svg[pepicons-pop-photo-camera-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPhotoCameraCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.696 8.078L8.398 9H7.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-.899l-.297-.922A3 3 0 0 0 14.449 6H11.55a3 3 0 0 0-2.855 2.078M7.5 11h2.354l.745-2.307A1 1 0 0 1 11.551 8h2.898a1 1 0 0 1 .951.693L16.145 11H18.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1"></svg:path><svg:path d="M9.5 14.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPhotoCameraCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPhotoCameraCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
