import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWidgetSolidIcon],svg[streamline-widget-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 9.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM7 .5a1 1 0 0 1 1 1V7a1 1 0 0 1-1 1H1.432a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1zm6 4.25a.5.5 0 0 1 .5.5V7.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V5.25a.5.5 0 0 1 .5-.5zM13 .5a.5.5 0 0 1 .5.5v2.25a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V1a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class StreamlineWidgetSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
