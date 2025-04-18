import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopPesoCircleFilledIcon],svg[pepicons-pop-peso-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopPesoCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 6.5H9v-2h5a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5H9v-2h5a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3"></svg:path><svg:path d="M9 4.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1"></svg:path><svg:path d="M5 8.436a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopPesoCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopPesoCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
