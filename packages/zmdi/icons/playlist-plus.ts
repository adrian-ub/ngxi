import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPlaylistPlusIcon],svg[zmdi-playlist-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 149v43H0v-43zm0-85v43H0V64zm85 171h86v42h-86v86h-42v-86h-86v-42h86v-86h42zM0 277v-42h171v42z"></svg:path>`,
})
export class ZmdiPlaylistPlusIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
