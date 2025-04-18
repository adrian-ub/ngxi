import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStepBackwardIcon],svg[la-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v22h2V16.5l.438.313l13 9L25 26.905V5.094l-1.563 1.093l-13 9L10 15.5V5zm15 3.906v14.188L12.75 16z"></svg:path>`,
})
export class LaStepBackwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
