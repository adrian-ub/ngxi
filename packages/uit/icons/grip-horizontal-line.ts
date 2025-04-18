import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitGripHorizontalLineIcon],svg[uit-grip-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 11h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m19 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitGripHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
