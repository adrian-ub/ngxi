import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStepForwardIcon],svg[la-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5v10.5l-.438-.313l-13-9L7 5.095v21.812l1.563-1.093l13-9L22 16.5V27h2V5zM9 8.906L19.25 16L9 23.094z"></svg:path>`,
})
export class LaStepForwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
