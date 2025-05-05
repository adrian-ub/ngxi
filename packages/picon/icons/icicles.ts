import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconIciclesIcon],svg[picon-icicles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1q0 13-2 1H5q-.5 5-1 0H3q-.5 10-1 0H1Q0 8 0 1"></svg:path>`,
})
export class PiconIciclesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
