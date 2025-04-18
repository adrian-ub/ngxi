import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTicTacToeIcon],svg[arcticons-tic-tac-toe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.833 5.5v37m12.334-37v37M42.5 17.833h-37m37 12.334h-37"></svg:path><svg:circle cx="24" cy="24" r="3.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.396" cy="24" r="3.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="36.396" cy="37.007" r="3.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.883" cy="37.007" r="3.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.883" cy="10.937" r="3.57" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.917 14.019l6.166-6.165m-6.166 0l6.166 6.165m-6.166 26.07l6.166-6.165m-6.166 0l6.166 6.165M7.801 26.973l6.165-6.166m-6.165 0l6.165 6.166"></svg:path>`,
})
export class ArcticonsTicTacToeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
