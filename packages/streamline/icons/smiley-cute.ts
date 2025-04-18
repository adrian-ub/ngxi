import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyCuteIcon],svg[streamline-smiley-cute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M8.367 5.69c.157-.255.5-.418.834-.418s.678.163.835.417m-4.403.001c-.157-.255-.5-.418-.834-.418s-.678.163-.835.417m.216 2.945a1.41 1.41 0 1 0 2.819 0a1.41 1.41 0 0 0 2.82 0"></svg:path></svg:g>`,
})
export class StreamlineSmileyCuteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
