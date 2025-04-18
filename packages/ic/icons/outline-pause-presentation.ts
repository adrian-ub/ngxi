import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlinePausePresentationIcon],svg[ic-outline-pause-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.1 0-2 .85-2 1.95v14c0 1.1.9 2.05 2 2.05h18c1.1 0 2-.95 2-2.05v-14C23 3.85 22.1 3 21 3m0 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z"></svg:path>`,
})
export class IcOutlinePausePresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
