import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPlaylistRepeatListBoldIcon],svg[iconamoon-playlist-repeat-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.5"><svg:path stroke-linejoin="round" d="m19 5l2 2m0 0l-2 2m2-2H7M5 19l-2-2m0 0l2-2m-2 2h14"></svg:path><svg:path d="M3 11a4 4 0 0 1 4-4m14 6a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class IconamoonPlaylistRepeatListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
