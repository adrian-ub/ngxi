import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugStopIcon],svg[codicon-debug-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13 2l1 1v10l-1 1H3l-1-1V3l1-1zm-.254 1.25H3.255v9.5h9.491z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDebugStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
