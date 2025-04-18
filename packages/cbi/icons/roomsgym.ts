import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsgymIcon],svg[cbi-roomsgym-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-3h-4v3c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v3h4v-3c0-.55.45-1 1-1zM4 12a1 1 0 0 1 1-1h1v10H5a1 1 0 0 1-1-1v-2a2 2 0 0 1 0-4zm24 2a2 2 0 0 1 0 4v2a1 1 0 0 1-1 1h-1V11h1a1 1 0 0 1 1 1z"></svg:path>`,
})
export class CbiRoomsgymIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
