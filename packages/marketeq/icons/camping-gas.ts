import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCampingGasIcon],svg[marketeq-camping-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 31.25v-4.167m-8.334 0v4.167"></svg:path><svg:path stroke="#306CFE" d="M14.583 31.25h20.834a2.083 2.083 0 0 1 2.083 2.083V43.75h-25V33.333a2.083 2.083 0 0 1 2.083-2.083m6.25-16.667A3.895 3.895 0 0 0 25 18.75a3.957 3.957 0 0 0 4.167-4.167c0-2.791-2.084-3.125-2.084-8.333c-4.166 2.083-6.25 5.396-6.25 8.333"></svg:path><svg:path stroke="#344054" d="M8.333 43.75h33.334"></svg:path></svg:g>`,
})
export class MarketeqCampingGasIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
