import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTreemap24FilledIcon],svg[fluent-data-treemap-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3H9v18H6.25A3.25 3.25 0 0 1 3 17.75zM10.5 21h7.25A3.25 3.25 0 0 0 21 17.75V15.5H10.5zM21 14V6.25A3.25 3.25 0 0 0 17.75 3H10.5v11z"></svg:path>`,
})
export class FluentDataTreemap24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
