import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainLogstashIcon],svg[devicon-plain-logstash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0v80c0 26.508 21.492 48 48 48h4V48C60 21.488 38.508 0 12 0Zm64 80v48h44V80Zm0 0"></svg:path>`,
})
export class DeviconPlainLogstashIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
