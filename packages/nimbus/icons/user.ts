import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusUserIcon],svg[nimbus-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7.83c-3.08 0-5.59 2.17-5.59 4.84V16h1.27v-3.33c0-2 1.94-3.57 4.32-3.57s4.32 1.6 4.32 3.57V16h1.27v-3.33c0-2.67-2.51-4.84-5.59-4.84m.1-1.22a3.22 3.22 0 0 0 3.1-3.31A3.21 3.21 0 0 0 8.1 0A3.21 3.21 0 0 0 5 3.3a3.22 3.22 0 0 0 3.1 3.31m0-5.32a1.92 1.92 0 0 1 1.81 2a1.93 1.93 0 0 1-1.81 2a1.93 1.93 0 0 1-1.8-2a1.92 1.92 0 0 1 1.8-2"></svg:path>`,
})
export class NimbusUserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
