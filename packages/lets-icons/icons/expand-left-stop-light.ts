import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsExpandLeftStopLightIcon],svg[lets-icons-expand-left-stop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m17 6l-6 6l6 6M6 7v10"></svg:path>`,
})
export class LetsIconsExpandLeftStopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
