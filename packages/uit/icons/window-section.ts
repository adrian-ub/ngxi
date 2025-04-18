import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitWindowSectionIcon],svg[uit-window-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 2h-19a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5m-13 19H3V9.5h5.5zm6 0h-5V9.5h5zm6.5 0h-5.5V9.5H21zm0-12.5H3V3h18z"></svg:path>`,
})
export class UitWindowSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
