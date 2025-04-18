import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlbum24FilledIcon],svg[fluent-album-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h1v16H4a2 2 0 0 1-2-2zm14 2.5h-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5M6.5 20H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6.5zM12 7h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class FluentAlbum24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
