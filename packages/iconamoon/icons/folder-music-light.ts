import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFolderMusicLightIcon],svg[iconamoon-folder-music-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 17V5h7l2 2h9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path><svg:circle cx="11" cy="15" r="1"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 10v5m2-3l-2-2"></svg:path></svg:g>`,
})
export class IconamoonFolderMusicLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
