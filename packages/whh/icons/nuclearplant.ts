import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNuclearplantIcon],svg[whh-nuclearplant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M996.413 959h-234q-115-638-122-895h224q13 0 22.5 9.5t9.5 22.5q0 79 12 181.5t26 179t44 231t46 239.5q2 13-6 22.5t-22 9.5m-320 64h-648q-14 0-22-9.5t-5-22.5q127-703 127-959q0-13 9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5q0 256 128 959q2 13-6 22.5t-22 9.5"></svg:path>`,
})
export class WhhNuclearplantIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
