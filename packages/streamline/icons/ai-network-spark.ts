import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiNetworkSparkIcon],svg[streamline-ai-network-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.512 7.463a6 6 0 1 1-6-6m-6 6h6.923"></svg:path><svg:path d="M6.512 1.463a10.36 10.36 0 0 0-2.308 6a10.36 10.36 0 0 0 2.308 6a10.36 10.36 0 0 0 2.142-4.615"></svg:path><svg:path d="M7.404 3.97c-.35-.06-.35-.564 0-.625A3.18 3.18 0 0 0 9.963.895l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.65-.003l-.02-.096a3.18 3.18 0 0 0-2.559-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiNetworkSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
