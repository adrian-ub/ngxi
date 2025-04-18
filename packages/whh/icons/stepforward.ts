import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhStepforwardIcon],svg[whh-stepforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1009.86 551l-435 463q-25 27-62-13V24q37-39 62-12l435 463q15 16 15 38t-15 38m-881 474q-53 0-90.5-37.5T.86 897V128q0-53 37.5-90.5T128.86 0t90.5 37.5t37.5 90.5v769q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhStepforwardIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
