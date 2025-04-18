import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasGroupIcon],svg[pajamas-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0m4 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-7 2.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class PajamasGroupIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
