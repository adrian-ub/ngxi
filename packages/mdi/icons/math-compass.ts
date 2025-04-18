import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMathCompassIcon],svg[mdi-math-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19.88V22l-1.8-1.17l-4.79-9c.66-.21 1.26-.55 1.78-1zM15 7a3 3 0 0 1-3 3h-.44L5.8 20.83L4 22v-2.12L9.79 9c-1.1-1.23-1-3.13.24-4.24C10.57 4.28 11.27 4 12 4V2a1 1 0 0 1 1 1v1.18c1.2.42 2 1.55 2 2.82m-2 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiMathCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
