import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableMoveRight20FilledIcon],svg[fluent-table-move-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM8 8h3.585q-.085.243-.085.5h-1a1.5 1.5 0 1 0 0 3h1q0 .256.085.5H8zm-5 7v-2h4v4H5a2 2 0 0 1-2-2m5 2v-4h4v3.5a.5.5 0 0 1-.5.5zM3 8v4h4V8zm9-1H8V3h3.5a.5.5 0 0 1 .5.5zM3 7V5a2 2 0 0 1 2-2h2v4zm9.646 4.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708l.647.646H10.5a.5.5 0 0 0 0 1h2.793z"></svg:path>`,
})
export class FluentTableMoveRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
