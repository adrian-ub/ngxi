import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoClipOptimize16FilledIcon],svg[fluent-video-clip-optimize-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2a.5.5 0 0 0 0-1A3.5 3.5 0 0 0 1 4.5a.5.5 0 0 0 1 0m1 1A2.5 2.5 0 0 1 5.5 3h5A2.5 2.5 0 0 1 13 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 10.5zM4.5 14A2.5 2.5 0 0 1 2 11.5a.5.5 0 0 0-1 0A3.5 3.5 0 0 0 4.5 15a.5.5 0 0 0 0-1M14 4.5A2.5 2.5 0 0 0 11.5 2a.5.5 0 0 1 0-1A3.5 3.5 0 0 1 15 4.5a.5.5 0 0 1-1 0M11.5 14a2.5 2.5 0 0 0 2.5-2.5a.5.5 0 0 1 1 0a3.5 3.5 0 0 1-3.5 3.5a.5.5 0 0 1 0-1m-5-3.82c0 .25.274.403.487.273l3.259-1.992a.54.54 0 0 0 0-.922l-3.26-1.991a.32.32 0 0 0-.486.273z"></svg:path>`,
})
export class FluentVideoClipOptimize16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
