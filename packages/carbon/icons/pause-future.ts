import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPauseFutureIcon],svg[carbon-pause-future-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h-2v11h2zm6 0h-2v11h2z"></svg:path><svg:path fill="currentColor" d="M16 2a13.92 13.92 0 0 1 10 4.234V2h2v8h-8V8h4.922A11.982 11.982 0 1 0 28 16h2A14 14 0 1 1 16 2"></svg:path>`,
})
export class CarbonPauseFutureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
