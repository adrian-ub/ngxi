import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMicOffIcon],svg[zmdi-mic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 195q0 36-19 70l-26-27q9-21 9-43zm-85 3L128 71v-4q0-27 18.5-45.5T192 3t45.5 18.5T256 67zM27 24l357 357l-27 27l-89-89q-26 15-55 19v70h-42v-70q-54-8-91-49t-37-94h36q0 46 33.5 77t79.5 31q25 0 49-11l-35-35q-7 2-14 2q-27 0-45.5-19T128 195v-16L0 51z"></svg:path>`,
})
export class ZmdiMicOffIcon {
  readonly viewBox = input("0 0 384 408")
  readonly width = input("0.95em")
  readonly height = input("1em")
}
