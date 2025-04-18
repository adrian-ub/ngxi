import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAlignVerticalCenterIcon],svg[carbon-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-4v-3a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v3h-4V8a2.003 2.003 0 0 0-2-2H8a2.003 2.003 0 0 0-2 2v7H2v2h4v7a2.003 2.003 0 0 0 2 2h4a2.003 2.003 0 0 0 2-2v-7h4v3a2.003 2.003 0 0 0 2 2h4a2.003 2.003 0 0 0 2-2v-3h4ZM8 24V8h4l.001 16Zm12-4v-8h4l.001 8Z"></svg:path>`,
})
export class CarbonAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
