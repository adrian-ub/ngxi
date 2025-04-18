import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentListBar24FilledIcon],svg[fluent-list-bar-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 21H19a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H9.5zm0-6.5H19a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H9.5zM8 9.5v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM9.5 8H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9.5zM8 3v5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 13v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z"></svg:path>`,
})
export class FluentListBar24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
