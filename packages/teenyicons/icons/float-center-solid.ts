import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFloatCenterSolidIcon],svg[teenyicons-float-center-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 0A1.5 1.5 0 0 0 4 1.5v4A1.5 1.5 0 0 0 5.5 7h4A1.5 1.5 0 0 0 11 5.5v-4A1.5 1.5 0 0 0 9.5 0zM0 2h2V1H0zm13 0h2V1h-2zM0 6h2V5H0zm13 0h2V5h-2zM0 10h15V9H0zm0 4h15v-1H0z"></svg:path>`,
})
export class TeenyiconsFloatCenterSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
