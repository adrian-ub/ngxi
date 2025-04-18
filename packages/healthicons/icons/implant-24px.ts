import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsImplant24pxIcon],svg[healthicons-implant-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 0-3 3v14a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3"></svg:path>`,
})
export class HealthiconsImplant24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
