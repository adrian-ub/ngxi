import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStepForwardIcon],svg[mdi-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v14h3V5m2 0v14l11-7"></svg:path>`,
})
export class MdiStepForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
