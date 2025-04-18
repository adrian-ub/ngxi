import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStepBackwardIcon],svg[mdi-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5v14h-3V5m-2 0v14L3 12"></svg:path>`,
})
export class MdiStepBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
