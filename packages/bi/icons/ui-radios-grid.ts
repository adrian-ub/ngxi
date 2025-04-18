import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biUiRadiosGridIcon],svg[bi-ui-radios-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m9-9a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 9a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M16 3.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-9 9a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m5.5 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m-9-11a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 2a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class BiUiRadiosGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
