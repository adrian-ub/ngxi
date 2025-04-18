import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePacmanIcon],svg[icomoon-free-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.074 2.794a8 8 0 1 0 0 10.412L10 8zM11 1.884a1.116 1.116 0 1 1 0 2.232a1.116 1.116 0 0 1 0-2.232"></svg:path>`,
})
export class IcomoonFreePacmanIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
