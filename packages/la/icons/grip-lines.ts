import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGripLinesIcon],svg[la-grip-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11v2h26v-2zm0 8v2h26v-2z"></svg:path>`,
})
export class LaGripLinesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
