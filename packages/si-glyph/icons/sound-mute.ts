import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphSoundMuteIcon],svg[si-glyph-sound-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.47 13.513l14-11.142l.873 1.097l-14 11.142zm2.483-3.601V5.01H3.128c-1.283 0-2.115 1.084-2.115 2.46v1.024c0 1.459.769 2.459 2.115 2.459h.386zm2.924 2.747l5.059 3.313c.586 0 1.06-.4 1.06-.895V7.919zM13.987.971c0-.507-.499-.92-1.115-.92L7.114 3.73C6.499 3.73 6 4.142 6 4.65v4.189l7.987-6.243z"></svg:path>`,
})
export class SiGlyphSoundMuteIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
