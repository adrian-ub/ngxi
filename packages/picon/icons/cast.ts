import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCastIcon],svg[picon-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7q1-2-1-1V5q3-1 2 2M1 2v1q3 0 3 3h3V2M3 7q1-4-3-3V1h8v6"></svg:path>`,
})
export class PiconCastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
