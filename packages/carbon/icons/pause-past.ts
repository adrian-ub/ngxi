import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPausePastIcon],svg[carbon-pause-past-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h-2v11h2zm6 0h-2v11h2z"></svg:path><svg:path fill="currentColor" d="M16 2A13.92 13.92 0 0 0 6 6.234V2H4v8h8V8H7.078A11.982 11.982 0 1 1 4 16H2A14 14 0 1 0 16 2"></svg:path>`,
})
export class CarbonPausePastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
