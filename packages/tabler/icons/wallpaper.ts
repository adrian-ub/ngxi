import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWallpaperIcon],svg[tabler-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6"></svg:path><svg:path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M8 18V6a2 2 0 1 0-4 0v12"></svg:path></svg:g>`,
})
export class TablerWallpaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
