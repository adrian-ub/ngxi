import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitRulerCombinedIcon],svg[uit-ruler-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V10h11.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5M21 9h-3.5V6.5a.5.5 0 0 0-1 0V9h-3V6.5a.5.5 0 0 0-1 0V9H10V6.5a.5.5 0 0 0-1 0V9H6.5a.5.5 0 0 0 0 1H9v2.5H6.5a.5.5 0 0 0 0 1H9v3H6.5a.5.5 0 0 0 0 1H9V21H3V3h18z"></svg:path>`,
})
export class UitRulerCombinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
