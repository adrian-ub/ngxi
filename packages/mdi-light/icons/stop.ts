import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightStopIcon],svg[mdi-light-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18H6V7h11zM7 8v9h9V8z"></svg:path>`,
})
export class MdiLightStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
