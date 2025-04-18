import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStopOutlineFilledIcon],svg[carbon-stop-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m6 18a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M12 12h8v8h-8z"></svg:path>`,
})
export class CarbonStopOutlineFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
