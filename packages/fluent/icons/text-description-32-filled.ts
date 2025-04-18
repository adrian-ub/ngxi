import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDescription32FilledIcon],svg[fluent-text-description-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 6a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5zm0 6a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5zM2 19.25c0-.69.56-1.25 1.25-1.25h25.5a1.25 1.25 0 1 1 0 2.5H3.25c-.69 0-1.25-.56-1.25-1.25M3.25 24a1.25 1.25 0 1 0 0 2.5h16.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentTextDescription32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
