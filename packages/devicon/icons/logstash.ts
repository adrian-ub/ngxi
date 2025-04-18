import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLogstashIcon],svg[devicon-logstash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00bfb3" d="M72 128h44V80H72Zm0 0"></svg:path><svg:path fill="#fec514" d="M12 0H8v80h52V48C60 21.488 38.508 0 12 0"></svg:path><svg:path fill="#343741" d="M8 80c0 26.508 21.492 48 48 48h4V80Zm0 0"></svg:path>`,
})
export class DeviconLogstashIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
