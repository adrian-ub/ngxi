import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitSignalAltIcon],svg[uit-signal-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 18a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5m5-4a.5.5 0 0 0-.5.5v7a.5.5 0 1 0 1 0v-7a.5.5 0 0 0-.5-.5m10-12a.5.5 0 0 0-.5.5v19a.5.5 0 1 0 1 0v-19a.5.5 0 0 0-.5-.5m-5 7a.5.5 0 0 0-.5.5v12a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class UitSignalAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
