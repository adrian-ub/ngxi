import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMobileCrashIcon],svg[carbon-mobile-crash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 20l-4-4l-1.414 1.414L27.17 20l-3 3l3 3l-2.585 2.586L26 30l4-4l-3-3zm-7 0l-4-4l-1.414 1.414L20.17 20l-3 3l3 3l-2.585 2.586L19 30l4-4l-3-3z"></svg:path><svg:path fill="currentColor" d="M15 28H9V8h14v6h2V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h6zM9 4h14v2H9z"></svg:path>`,
})
export class CarbonMobileCrashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
