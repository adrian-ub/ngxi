import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibLogstashIcon],svg[cib-logstash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.802 9.599V32C9.864 32 2.401 26.667 2.401 19.599V0h4.797c5.068 0 9.604 4.531 9.604 9.599m3.198 8V32h9.599V17.599z"></svg:path>`,
})
export class CibLogstashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
