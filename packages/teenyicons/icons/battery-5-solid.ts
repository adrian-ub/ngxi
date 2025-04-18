import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBattery5SolidIcon],svg[teenyicons-battery-5-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 11.5A1.5 1.5 0 0 0 1.5 13h10a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 11.5 2h-10A1.5 1.5 0 0 0 0 3.5zm3-.5V4H2v7zm2 0V4H4v7zm2-7v7H6V4zm2 7V4H8v7zm2-7v7h-1V4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 5v5h-1V5z"></svg:path>`,
})
export class TeenyiconsBattery5SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
