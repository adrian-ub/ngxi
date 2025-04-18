import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentIotAlert20FilledIcon],svg[fluent-iot-alert-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.991a2 2 0 0 1-2.647 1.893l-1.284 1.943q.163.156.302.334A4 4 0 0 0 9.499 12v.958a3 3 0 0 1-1.91-1.173l-1.635.787Q6 12.779 6 13a2 2 0 1 1-.498-1.32l1.633-.787a3 3 0 0 1 .637-2.902l-.935-1.174a2 2 0 1 1 .775-.632l.944 1.185A3 3 0 0 1 10 7c.442 0 .862.096 1.24.268l1.278-1.934A2 2 0 1 1 16 3.991M10.5 12a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.324.881H9.503a.5.5 0 0 1-.323-.881L10.5 14zm3 6a1.5 1.5 0 0 1-1.415-1h2.829a1.5 1.5 0 0 1-1.415 1"></svg:path>`,
})
export class FluentIotAlert20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
