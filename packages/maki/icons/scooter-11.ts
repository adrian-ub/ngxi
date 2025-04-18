import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiScooter11Icon],svg[maki-scooter-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M1 9h2a.979.979 0 0 1-1 1a.979.979 0 0 1-1-1zm8.753-5H9V3h.351a.282.282 0 0 0 .223-.148l.268-.536a.333.333 0 0 0 .009-.066A.25.25 0 0 0 9.6 2H9v-.5H6.25a.25.25 0 0 0 0 .5H8v2.5L5 7H4V5.5a.5.5 0 0 0-.5-.5H3V4h1.75A.25.25 0 0 0 5 3.75a.245.245 0 0 0-.223-.239V3.5L1.25 3a.25.25 0 0 0-.25.25v.5a.25.25 0 0 0 .25.25H2v1h-.5a.5.5 0 0 0-.5.5V8h5.172a1 1 0 0 0 .709-.294l.419-.414A1 1 0 0 1 8 7h1.752A.248.248 0 0 0 10 6.752v-2.5A.247.247 0 0 0 9.753 4zM9 8a1 1 0 1 0 1 1a1 1 0 0 0-1-1z" fill="currentColor"></svg:path>`,
})
export class MakiScooter11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
