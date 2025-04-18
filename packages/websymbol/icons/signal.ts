import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolSignalIcon],svg[websymbol-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 1000H0V667h222zm371 0H370V333h223zm148 0V0h222v1000z"></svg:path>`,
})
export class WebsymbolSignalIcon {
  readonly viewBox = input("0 0 963 1000")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
