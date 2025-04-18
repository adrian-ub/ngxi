import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsImplantOutlineIcon],svg[healthicons-implant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 10a4 4 0 0 1 8 0v28a4 4 0 0 1-8 0zm4-2a2 2 0 0 0-2 2v28a2 2 0 1 0 4 0V10a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsImplantOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
