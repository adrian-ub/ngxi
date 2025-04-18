import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCameraDome28FilledIcon],svg[fluent-camera-dome-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.75C2 3.784 2.784 3 3.75 3h20.5a1.75 1.75 0 1 1 0 3.5H3.75A1.75 1.75 0 0 1 2 4.75M9 16.5a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M3 8h22v7c0 6.075-4.925 11-11 11S3 21.075 3 15zm4.5 8.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0"></svg:path>`,
})
export class FluentCameraDome28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
