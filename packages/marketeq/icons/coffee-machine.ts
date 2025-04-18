import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCoffeeMachineIcon],svg[marketeq-coffee-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 14.583v4.167m4.167 12.5v-4.167h-8.333v4.167a4.167 4.167 0 1 0 8.333 0"></svg:path><svg:path stroke="#306CFE" d="M41.667 43.75H8.333a2.083 2.083 0 0 1-2.083-2.083v-6.25h37.5v6.25a2.083 2.083 0 0 1-2.083 2.083m-2.084-37.5H8.333A2.083 2.083 0 0 0 6.25 8.333v27.084h14.583V14.583H37.5a2.083 2.083 0 0 0 2.083-2.083z"></svg:path></svg:g>`,
})
export class MarketeqCoffeeMachineIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
