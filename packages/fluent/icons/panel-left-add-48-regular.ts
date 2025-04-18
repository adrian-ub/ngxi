import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftAdd48RegularIcon],svg[fluent-panel-left-add-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5A6.25 6.25 0 0 0 10.25 41h13.214a13 13 0 0 1-.987-2.5H18.25v-29h19.5a3.75 3.75 0 0 1 3.75 3.75v10.49a13 13 0 0 1 2.5 1.88V13.25A6.25 6.25 0 0 0 37.75 7zM6.5 13.25a3.75 3.75 0 0 1 3.75-3.75h5.5v29h-5.5a3.75 3.75 0 0 1-3.75-3.75zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"></svg:path>`,
})
export class FluentPanelLeftAdd48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
