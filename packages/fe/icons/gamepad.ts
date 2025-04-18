import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feGamepadIcon],svg[fe-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 15h-2a5 5 0 1 1-4-8h10a5 5 0 1 1-4 8m-5-4v-1a1 1 0 1 0-2 0v1H5a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FeGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
