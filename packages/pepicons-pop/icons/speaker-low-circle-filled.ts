import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSpeakerLowCircleFilledIcon],svg[pepicons-pop-speaker-low-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopSpeakerLowCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m13.334 4.754l-4.68 4.178H5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.535l4.796 4.312c.644.578 1.669.122 1.669-.744v-15c0-.864-1.021-1.321-1.666-.746m-3.668 5.955L13 7.733v10.523l-3.126-2.81A1 1 0 0 0 9 14.932H6v-4h2.751c.302.079.642.02.915-.223" clip-rule="evenodd"></svg:path><svg:path d="M18.489 16.069a.75.75 0 1 1-.978-1.138q.05-.043.1-.094q.209-.216.362-.536A3.05 3.05 0 0 0 18.25 13c0-.754-.25-1.433-.639-1.837a2 2 0 0 0-.1-.094a.75.75 0 1 1 .978-1.138q.105.09.202.191c.67.696 1.059 1.75 1.059 2.878c0 .696-.147 1.366-.423 1.945c-.168.355-.383.67-.636.933a3 3 0 0 1-.202.19"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopSpeakerLowCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopSpeakerLowCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
