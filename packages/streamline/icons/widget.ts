import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWidgetIcon],svg[streamline-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 9.5a1 1 0 0 1 1 1V12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1zM7 1a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H1.932a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm5.469 0a.5.5 0 0 1 .5.5v1.25a.5.5 0 0 1-.5.5H10.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5zm0 4.25a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5H10.5A.5.5 0 0 1 10 7V5.75a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class StreamlineWidgetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
