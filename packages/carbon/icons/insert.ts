import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInsertIcon],svg[carbon-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h9V2H2zm2-5h5v3H4zM2 19h9v-7H2zm2-5h5v3H4zM2 29h9v-7H2zm2-5h5v3H4zM27 9h-9l3.41-3.59L20 4l-6 6l6 6l1.41-1.41L18 11h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H15v2h12a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3"></svg:path>`,
})
export class CarbonInsertIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
