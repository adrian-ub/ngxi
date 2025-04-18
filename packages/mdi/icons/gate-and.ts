import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateAndIcon],svg[mdi-gate-and-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h12a8 8 0 0 0 8-8a8 8 0 0 0-8-8zm2 2h10a6 6 0 0 1 6 6a6 6 0 0 1-6 6H4z"></svg:path>`,
})
export class MdiGateAndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
