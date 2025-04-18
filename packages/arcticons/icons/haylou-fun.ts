import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHaylouFunIcon],svg[arcticons-haylou-fun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.488 27.442c0-7.563-6.205-13.767-13.767-13.767a3.442 3.442 0 0 0 0 6.884a6.83 6.83 0 0 1 6.884 6.883v11.616a3.442 3.442 0 0 0 6.883 0V8.943a3.442 3.442 0 0 0-6.883 0v6.594M8.512 20.558c0 7.563 6.205 13.767 13.767 13.767a3.442 3.442 0 0 0 0-6.884a6.83 6.83 0 0 1-6.884-6.883V8.942a3.442 3.442 0 0 0-6.883 0v30.115a3.442 3.442 0 0 0 6.883 0v-6.594"></svg:path>`,
})
export class ArcticonsHaylouFunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
