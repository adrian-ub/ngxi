import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMovieOpenSettingsOutlineIcon],svg[mdi-movie-open-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.65 4.5L16.91.96l3.93-.78l.78 3.92zm-2.94.57l-2.74-3.53l-1.97.39l2.75 3.53zm-4.9.98L9.07 2.5l-1.97.41l2.75 3.53zM4.16 3.5l-.98.19a1.995 1.995 0 0 0-1.57 2.35L2 8l4.9-.97zM22 8v10c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V8zm-2 2H4v8h16zM7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"></svg:path>`,
})
export class MdiMovieOpenSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
