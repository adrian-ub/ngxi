import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeft48RegularIcon],svg[fluent-panel-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5A6.25 6.25 0 0 0 10.25 41h27.5A6.25 6.25 0 0 0 44 34.75v-21.5A6.25 6.25 0 0 0 37.75 7zM6.5 13.25a3.75 3.75 0 0 1 3.75-3.75h5.5v29h-5.5a3.75 3.75 0 0 1-3.75-3.75zM18.25 38.5v-29h19.5a3.75 3.75 0 0 1 3.75 3.75v21.5a3.75 3.75 0 0 1-3.75 3.75z"></svg:path>`,
})
export class FluentPanelLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
