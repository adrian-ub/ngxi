import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiLineChartIcon],svg[oui-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.333 2v10.667H14V14H2V2zm10.195 2.195l.943.943l-3.805 3.805l-2-2l-2.862 2.862l-.942-.943l3.804-3.805l2 2z"></svg:path>`,
})
export class OuiLineChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
