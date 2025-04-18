import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBattery0SolidIcon],svg[teenyicons-battery-0-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 13A1.5 1.5 0 0 1 0 11.5v-8A1.5 1.5 0 0 1 1.5 2h10A1.5 1.5 0 0 1 13 3.5v8a1.5 1.5 0 0 1-1.5 1.5zM15 10V5h-1v5z"></svg:path>`,
})
export class TeenyiconsBattery0SolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
