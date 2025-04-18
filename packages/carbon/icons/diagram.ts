import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDiagramIcon],svg[carbon-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 30a11 11 0 0 1 0-22a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1a11 11 0 0 1-11 11m-1-19.94A9 9 0 1 0 21.94 20H14a2 2 0 0 1-2-2Z"></svg:path><svg:path fill="currentColor" d="M28 14h-9a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1a11 11 0 0 1 11 11a1 1 0 0 1-1 1m-9-2h7.94A9 9 0 0 0 19 4.06Z"></svg:path>`,
})
export class CarbonDiagramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
