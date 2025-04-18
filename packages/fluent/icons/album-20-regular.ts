import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlbum20RegularIcon],svg[fluent-album-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.5A1.5 1.5 0 0 1 9.5 7h4A1.5 1.5 0 0 1 15 8.5v1a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8 9.5zM9.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 9h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zM5 5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1z"></svg:path>`,
})
export class FluentAlbum20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
