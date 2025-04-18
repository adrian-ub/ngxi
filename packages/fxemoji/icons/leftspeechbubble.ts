import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiLeftspeechbubbleIcon],svg[fxemoji-leftspeechbubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E3E2DD" d="M502.546 464h.03l-.052-.138a12.6 12.6 0 0 0-.757-2.455l-39.921-130.433c10.518-26.747 16.297-55.877 16.297-86.363c0-130.257-105.467-235.849-235.566-235.849S7.011 114.357 7.011 244.614s105.467 235.851 235.566 235.851c43.123 0 83.534-11.611 118.301-31.867L485.701 478.5c.831.295 1.685.492 2.55.611l.166.031s.002-.01 0-.019a12.77 12.77 0 0 0 10.915-3.94c2.912-3.102 3.944-7.183 3.214-11.183"></svg:path>`,
})
export class FxemojiLeftspeechbubbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
