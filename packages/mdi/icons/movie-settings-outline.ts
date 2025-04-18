import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMovieSettingsOutlineIcon],svg[mdi-movie-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V4zm2 14H4V6.47L5.76 10H20zm-9 4h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class MdiMovieSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
