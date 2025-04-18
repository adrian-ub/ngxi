import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBrushSubtract24FilledIcon],svg[fluent-paint-brush-subtract-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 5.252V2H5.75a.75.75 0 0 0-.75.75V11h14V2.75a.75.75 0 0 0-.75-.75H16.5v4.251a.75.75 0 0 1-1.5 0V2h-1v3.252a.75.75 0 0 1-1.5 0M11 17.5c0-2.01.913-3.808 2.346-5H5v1.752a2.25 2.25 0 0 0 2.25 2.25H9.5V19.5a2.5 2.5 0 0 0 3.213 2.397A6.48 6.48 0 0 1 11 17.5m6.5-5.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m2.997 6a.5.5 0 0 0 0-1h-6.001a.5.5 0 0 0 0 1z"></svg:path>`,
})
export class FluentPaintBrushSubtract24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
