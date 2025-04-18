import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInstrumentTriangleIcon],svg[mdi-instrument-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2h-1v4.2c-.1.1-.2.1-.3.3L2.1 20.7c-.3.6.1 1.3.8 1.3H16v-2H4.8L11 9.2l5.7 10l1.7-1l-6.6-11.8l-.3-.3zM21 6h-1v12l-.5 4h2l-.5-4z"></svg:path>`,
})
export class MdiInstrumentTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
