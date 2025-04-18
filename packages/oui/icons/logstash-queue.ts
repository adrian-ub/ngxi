import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiLogstashQueueIcon],svg[oui-logstash-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.339 15.464H4.77a3.25 3.25 0 0 1-3.245-3.244V4.549H0v-1h2.526v8.67a2.247 2.247 0 0 0 2.245 2.245h6.568a2.247 2.247 0 0 0 2.244-2.244V3.549h2.455v1h-1.455v7.67a3.247 3.247 0 0 1-3.244 3.245m.513-5.962v1.095l-3.848 1.72l-3.85-1.72V9.502l3.85 1.72zm0-4.251v1.095l-3.848 1.72l-3.85-1.72V5.25l3.85 1.72zm0-4.251v1.095l-3.848 1.72l-3.85-1.72V1l3.85 1.72z"></svg:path>`,
})
export class OuiLogstashQueueIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
