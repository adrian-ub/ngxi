import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMusicFIcon],svg[jam-music-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.954 12.87V1.564a1 1 0 0 1 1-1h.028a1 1 0 0 1 1 1V15.63c.197 1.969-1.42 3.99-3.874 4.693c-2.69.772-5.368-.333-5.98-2.468s1.073-4.491 3.764-5.263c1.47-.421 2.935-.283 4.062.277z"></svg:path>`,
})
export class JamMusicFIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
