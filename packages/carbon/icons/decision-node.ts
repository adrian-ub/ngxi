import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDecisionNodeIcon],svg[carbon-decision-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2v8h-4l-8-8l-8 8H4V2H2v8c0 1.103.897 2 2 2h4l7 7v7.172l-2.586-2.586L11 25l5 5l5-5l-1.414-1.414L17 26.172V19l7-7h4c1.103 0 2-.897 2-2V2zM16 17.171L9.829 11L16 4.829L22.171 11z"></svg:path>`,
})
export class CarbonDecisionNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
