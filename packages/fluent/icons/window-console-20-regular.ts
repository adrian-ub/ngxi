import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowConsole20RegularIcon],svg[fluent-window-console-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.646 9.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L7.293 11.5L5.646 9.854a.5.5 0 0 1 0-.708M14.5 13h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1M2.996 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5V6H17v1h-.003v7.5a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5V6zm-12 1v7.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7z"></svg:path>`,
})
export class FluentWindowConsole20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
