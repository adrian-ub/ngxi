import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBarGraphIcon],svg[entypo-bar-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1h-2a1 1 0 0 0-1 1v16.992h4V2a1 1 0 0 0-1-1m-6 6H9a1 1 0 0 0-1 1v10.992h4V8a1 1 0 0 0-1-1m-6 6H3a1 1 0 0 0-1 1v4.992h4V14a1 1 0 0 0-1-1"></svg:path>`,
})
export class EntypoBarGraphIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
