import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPlexampIcon],svg[cbi-plexamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 11.747h-1.878a.25.25 0 0 0-.2.1l-5.243 7.226h-1.42l5.03-6.932a.25.25 0 0 0 0-.294l-5.321-7.326a.25.25 0 0 0-.2-.1h-2.039a.25.25 0 0 0-.25.25a.25.25 0 0 0 .05.15L15.488 12l-5.137 7.079H8.932l5.03-6.932a.25.25 0 0 0 0-.294L8.644 4.521a.25.25 0 0 0-.2-.1H6.4a.249.249 0 0 0-.2.4l5.03 6.932H2.25a.25.25 0 0 0 0 .5h9.472a.249.249 0 0 0 .2-.4L6.894 4.918h1.42L13.451 12l-5.212 7.179a.25.25 0 0 0 .2.4h2.037a.25.25 0 0 0 .2-.1L16 12.144a.25.25 0 0 0 0-.294l-5.03-6.932h1.42L17.525 12l-5.211 7.182a.249.249 0 0 0 .2.4h2.037a.25.25 0 0 0 .2-.1L20 12.247h1.75a.25.25 0 0 0 0-.5"></svg:path>`,
})
export class CbiPlexampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
