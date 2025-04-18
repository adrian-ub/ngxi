import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLockIcon],svg[gg-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 10.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3v-3a6 6 0 1 1 12 0zm-6-7a4 4 0 0 1 4 4v3H8v-3a4 4 0 0 1 4-4m6 9H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
