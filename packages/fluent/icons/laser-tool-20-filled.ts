import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaserTool20FilledIcon],svg[fluent-laser-tool-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2a.5.5 0 0 0-.5.5V5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5zm7 8h4A1.5 1.5 0 0 0 16 8.5V8H4v.5A1.5 1.5 0 0 0 5.5 10h4v2.5a.5.5 0 0 0 1 0zM5 14.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5m8-.5a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1zm-2.5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m0 2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm-1.646-1.354a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0m2.292.708a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1-.708.708z"></svg:path>`,
})
export class FluentLaserTool20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
