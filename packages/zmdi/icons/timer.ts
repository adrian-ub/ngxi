import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTimerIcon],svg[zmdi-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 5v43H128V5zm-85 278V155h42v128zm171-141q42 52 42 119q0 80-56 136t-136 56t-136-56T0 261.5t56-136T192 69q67 0 120 43l30-31q16 13 30 30zM192 411q62 0 105.5-44T341 261t-43.5-105.5T192 112T86.5 155.5T43 261t43.5 106T192 411"></svg:path>`,
})
export class ZmdiTimerIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
