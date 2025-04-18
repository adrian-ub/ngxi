import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWomenLinearIcon],svg[solar-women-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9.5 17.75a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM11.25 22a.75.75 0 1 0 1.5 0zm0-6v2.5h1.5V16zm.75 1.75H9.5v1.5H12zm2.5 0H12v1.5h2.5zm-3.25.75V22h1.5v-3.5z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"></svg:path></svg:g>`,
})
export class SolarWomenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
