import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidDiceIcon],svg[fa6-solid-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8l138.8 138.8c28.1 28.1 73.7 28.1 101.8 0l138.8-138.8c28.1-28.1 28.1-73.7 0-101.8zM200 224a24 24 0 1 1 48 0a24 24 0 1 1-48 0M96 200a24 24 0 1 1 0 48a24 24 0 1 1 0-48m128 176a24 24 0 1 1 0-48a24 24 0 1 1 0 48m128-176a24 24 0 1 1 0 48a24 24 0 1 1 0-48m-128-80a24 24 0 1 1 0-48a24 24 0 1 1 0 48m96 328c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8zm160-120a24 24 0 1 1 0 48a24 24 0 1 1 0-48"></svg:path>`,
})
export class Fa6SolidDiceIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
