import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCameraDome24FilledIcon],svg[fluent-camera-dome-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5a1.75 1.75 0 1 1 0 3.5H3.75A1.75 1.75 0 0 1 2 3.75M12 17.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8m2.5-4a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M3 7h18v6a9 9 0 1 1-18 0zm9 12a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class FluentCameraDome24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
