import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMovieSettingsIcon],svg[mdi-movie-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v14c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4zM7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiMovieSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
