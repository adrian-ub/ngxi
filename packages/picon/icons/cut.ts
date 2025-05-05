import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCutIcon],svg[picon-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8H0V0h4M3 7V5H1v2m2-4V1H1v2m4 1l3 3l-1 1l-4-4l4-4l1 1"></svg:path>`,
})
export class PiconCutIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
