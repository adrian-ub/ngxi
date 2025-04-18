import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectangleLandscapeHintCopy20FilledIcon],svg[fluent-rectangle-landscape-hint-copy-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.996 5.5a.5.5 0 0 0 1 0V5a2 2 0 0 0-2-2h-1.5a.5.5 0 0 0 0 1h1.5a1 1 0 0 1 1 1zm-8-2a.5.5 0 0 1-.5.5H7a1 1 0 0 0-1 1v.496a.5.5 0 0 1-1 0V5a2 2 0 0 1 2-2h1.496a.5.5 0 0 1 .5.5M5.5 10.997a.5.5 0 0 1 .5.5v.504a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H7a2 2 0 0 1-2-2v-.504a.5.5 0 0 1 .5-.5m11.496.5a.5.5 0 0 1 1 0v.504a2 2 0 0 1-2 2h-1.5a.5.5 0 1 1 0-1h1.5a1 1 0 0 0 1-1zM13.006 3.5a.5.5 0 0 1-.5.5h-1.998a.5.5 0 0 1 0-1h1.998a.5.5 0 0 1 .5.5M5.5 7.006a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m12.496.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm-5.49 6.495a.5.5 0 1 0 0-1h-1.998a.5.5 0 1 0 0 1zM2 7.41c0-1.38.82-2.57 2-3.106v7.946A2.75 2.75 0 0 0 6.75 15h9.946a3.41 3.41 0 0 1-3.106 2H6.5A4.5 4.5 0 0 1 2 12.5z"></svg:path>`,
})
export class FluentRectangleLandscapeHintCopy20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
