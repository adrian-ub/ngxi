import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsWidgetIcon],svg[bxs-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m0 10h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m10 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m7.293-14.707l-3.586-3.586a1 1 0 0 0-1.414 0l-3.586 3.586a1 1 0 0 0 0 1.414l3.586 3.586a1 1 0 0 0 1.414 0l3.586-3.586a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class BxsWidgetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
