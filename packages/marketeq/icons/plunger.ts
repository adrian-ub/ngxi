import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPlungerIcon],svg[marketeq-plunger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25a10.3 10.3 0 0 1 4.167.875V10.417a4.167 4.167 0 1 0-8.334 0v21.708A10.3 10.3 0 0 1 25 31.25"></svg:path><svg:path stroke="#306CFE" d="M12.5 43.75h25m-2.083 0H14.583v-2.083a10.417 10.417 0 0 1 20.834 0z"></svg:path></svg:g>`,
})
export class MarketeqPlungerIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
