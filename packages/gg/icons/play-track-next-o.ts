import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackNextOIcon],svg[gg-play-track-next-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m13-3a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0zm-1 3l-6 3.464V8.536z" clip-rule="evenodd"></svg:path>`,
})
export class GgPlayTrackNextOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
