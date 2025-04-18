import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPlaybackButtonIcon],svg[cbi-playback-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.793 3.441v17.118a1.243 1.243 0 0 1-1.83 1.19L3.329 12.991a1.184 1.184 0 0 1 0-1.982l14.634-8.758a1.243 1.243 0 0 1 1.83 1.19"></svg:path>`,
})
export class CbiPlaybackButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
