import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMinusFiveCircleIcon],svg[majesticons-minus-five-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-9-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H14a1 1 0 1 0 0 2h1.5a2.5 2.5 0 0 0 0-5H15v-1h2a1 1 0 1 0 0-2zm-7 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsMinusFiveCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
