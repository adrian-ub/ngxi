import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisHospitalIcon],svg[uis-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 6.5h-3v-4c0-.6-.4-1-1-1h-11c-.6 0-1 .4-1 1v4h-3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h19c.6 0 1-.4 1-1v-14c0-.6-.4-1-1-1m-14 12h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m0-4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m5 4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m0-4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m1-5.5H13v.5c0 .6-.4 1-1 1s-1-.4-1-1V9h-.5c-.6 0-1-.4-1-1s.4-1 1-1h.5v-.5c0-.6.4-1 1-1s1 .4 1 1V7h.5c.6 0 1 .4 1 1s-.4 1-1 1m4 9.5h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m0-4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
