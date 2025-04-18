import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExpandDownIcon],svg[tdesign-expand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v11h16V4zm16 13H4v3h16z"></svg:path><svg:path fill="currentColor" d="m12 12l4.5-4.5h-9z"></svg:path>`,
})
export class TdesignExpandDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
