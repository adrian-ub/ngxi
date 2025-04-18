import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsImplantIcon],svg[healthicons-implant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9a3 3 0 1 1 6 0v30a3 3 0 1 1-6 0z"></svg:path>`,
})
export class HealthiconsImplantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
