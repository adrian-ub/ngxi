import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookDownRight24FilledIcon],svg[fluent-arrow-hook-down-right-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 6H16a1 1 0 1 0 0-2h-5.5a6.5 6.5 0 0 0 0 13h5.14l-1.933 1.933a1 1 0 0 0 1.414 1.414l3.53-3.529a1 1 0 0 0 .21-.308a1 1 0 0 0-.18-1.243l-.028-.029l-3.531-3.53a1 1 0 0 0-1.415 1.413L15.586 15H10.5a4.5 4.5 0 1 1 0-9"></svg:path>`,
})
export class FluentArrowHookDownRight24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
