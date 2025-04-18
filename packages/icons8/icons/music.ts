import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8MusicIcon],svg[icons8-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 3.78l-1.188.25l-16 3L9 7.157v13.407A3.9 3.9 0 0 0 7 20c-2.197 0-4 1.803-4 4s1.803 4 4 4s4-1.803 4-4V12.812l14-2.624v7.374A3.93 3.93 0 0 0 23 17c-2.197 0-4 1.803-4 4s1.803 4 4 4s4-1.803 4-4zm-2 2.41v2l-14 2.624v-2zM23 19c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2M7 22c1.116 0 2 .884 2 2s-.884 2-2 2s-2-.884-2-2s.884-2 2-2"></svg:path>`,
})
export class Icons8MusicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
