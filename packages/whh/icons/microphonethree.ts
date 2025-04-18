import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMicrophonethreeIcon],svg[whh-microphonethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1000.694 930l-70 70q-16 17-33.5 22t-33.5-7l-372-274l-82 82q-9 9-22.5 9t-23.5-9l-226-226q-9-10-9-23.5t9-22.5l49-49q-81-23-133.5-91T.694 256q0-106 75-181t181-75q87 0 155 52.5t91 133.5l49-49q10-9 23.5-9t22.5 9l226 226q9 10 9 23t-9 23l-81 81l273 372q12 17 7 34.5t-22 33.5m-246-544l-180-180l-368 368l180 180z"></svg:path>`,
})
export class WhhMicrophonethreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
