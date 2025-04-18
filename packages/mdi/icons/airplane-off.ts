import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneOffIcon],svg[mdi-airplane-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L18 19.9l-.62.63L16 17.89l-3.65-3.65L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37l2.73-2.75L6.59 8.5L3.94 7.09l.63-.63L1.11 3l1.28-1.27l19.72 19.73zM16.67 9.92l3.89-3.89c.59-.58.59-1.53 0-2.12s-1.56-.58-2.12 0L14.55 7.8L9.94 6.74l7.8 7.8z"></svg:path>`,
})
export class MdiAirplaneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
