import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisBarHorizontalStackedIcon],svg[oui-vis-bar-horizontal-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 0a.5.5 0 0 1 .5.5v14a.5.5 0 1 1-1 0V.5A.5.5 0 0 1 .5 0m13 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H9v3h2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 1 1 0-1H9v-3H2.5a.5.5 0 0 1 0-1H6V6H2.5a.5.5 0 0 1 0-1H10V2H2.5a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class OuiVisBarHorizontalStackedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
