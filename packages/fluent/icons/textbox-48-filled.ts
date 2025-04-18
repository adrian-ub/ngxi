import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextbox48FilledIcon],svg[fluent-textbox-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6zm9.25 10.5a1.25 1.25 0 1 0 0 2.5h10.5a1.25 1.25 0 1 0 0-2.5zM14 31.75c0 .69.56 1.25 1.25 1.25h17.5a1.25 1.25 0 1 0 0-2.5h-17.5c-.69 0-1.25.56-1.25 1.25m1.25-17.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentTextbox48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
