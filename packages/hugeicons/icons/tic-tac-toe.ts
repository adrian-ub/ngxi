import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTicTacToeIcon],svg[hugeicons-tic-tac-toe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20m10-10H2m6 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M16 3l5 5m0-5l-5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsTicTacToeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
