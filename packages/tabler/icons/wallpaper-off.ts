import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWallpaperOffIcon],svg[tabler-wallpaper-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6h8a2 2 0 0 1 2 2v8m-.58 3.409A2 2 0 0 1 18 20H6"></svg:path><svg:path d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M8 18V8M4.573 4.598A2 2 0 0 0 4 6v12M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerWallpaperOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
