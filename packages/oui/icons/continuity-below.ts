import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiContinuityBelowIcon],svg[oui-continuity-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V9H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.5.5 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 5.5V7h6V3.5a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class OuiContinuityBelowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
