import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCryIcon],svg[fe-cry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5.5 4a3 3 0 0 0-6 0h1s.317-2 2-2s1.996 2 1.996 2zm-.5-4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m4-7a1 1 0 0 0 1-1q0-.552-1-2q-1 1.448-1 2a1 1 0 0 0 1 1"></svg:path>`,
})
export class FeCryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
