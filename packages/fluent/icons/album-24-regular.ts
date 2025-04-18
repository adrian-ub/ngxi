import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlbum24RegularIcon],svg[fluent-album-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5zM4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm16 1.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7.5v-13zm-16 0h2v13H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentAlbum24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
