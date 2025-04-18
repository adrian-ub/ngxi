import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsExpandLeftStopIcon],svg[lets-icons-expand-left-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m17 6l-6 6l6 6M6 7v10"></svg:path>`,
})
export class LetsIconsExpandLeftStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
