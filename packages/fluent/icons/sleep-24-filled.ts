import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSleep24FilledIcon],svg[fluent-sleep-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.378 3.026A9.004 9.004 0 1 1 5.475 17.13a.675.675 0 0 1 .329-1.019c3.391-1.214 5.208-2.62 6.262-4.633c1.11-2.118 1.396-4.438.62-7.619a.675.675 0 0 1 .692-.834m-2.384.627L11 3.75V9a2 2 0 1 1-1.499-1.937l-.001-2.3L6 5.829V10a2 2 0 1 1-1.499-1.937L4.5 5.273a.75.75 0 0 1 .43-.679l.102-.039l5-1.521a.75.75 0 0 1 .962.619"></svg:path>`,
})
export class FluentSleep24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
