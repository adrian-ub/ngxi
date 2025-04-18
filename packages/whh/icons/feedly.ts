import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFeedlyIcon],svg[whh-feedly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M633 559L358 832H250l-67-67q-7-7-7-17t7-17l312-310q7-7 17-7t17 7l104 103q7 7 7 17.5t-7 17.5m0-414L204 576H56L7 528q-7-7-7-17.5T7 493L495 7q7-7 17-7t17 7l104 104q7 7 7 17t-7 17M391 938l104-104q7-7 17-7t17 7l104 104q7 7 7 17t-7 17l-52 52H443l-52-52q-7-7-7-17t7-17"></svg:path>`,
})
export class WhhFeedlyIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
