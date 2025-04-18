import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftHeaderAdd48RegularIcon],svg[fluent-panel-left-header-add-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v12.37a13 13 0 0 0-2.5-1.88V20.5H18.25v18h4.227c.243.874.576 1.71.987 2.5H10.25A6.25 6.25 0 0 1 4 34.75zM18.25 18H41.5v-4.75a3.75 3.75 0 0 0-3.75-3.75h-19.5zm-8-8.5a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h5.5v-29zM35 46c6.075 0 11-4.925 11-11s-4.925-11-11-11s-11 4.925-11 11s4.925 11 11 11m0-19a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6h-6a1 1 0 1 1 0-2h6v-6a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentPanelLeftHeaderAdd48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
