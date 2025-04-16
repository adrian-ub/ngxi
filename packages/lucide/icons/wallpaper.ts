import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWallpaperIcon],svg[lucide-wallpaper-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="9" r="2"></svg:circle><svg:path d="m9 17l6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2M8 21h8m-4-4v4"></svg:path></svg:g>`,
})
export class LucideWallpaperIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
