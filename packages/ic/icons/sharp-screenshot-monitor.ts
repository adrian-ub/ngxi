import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpScreenshotMonitorIcon],svg[ic-sharp-screenshot-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H2v16h6v2h8v-2h6zm-2 14H4V5h16z"></svg:path><svg:path fill="currentColor" d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"></svg:path>`,
})
export class IcSharpScreenshotMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
