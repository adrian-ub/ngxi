import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsAudioOffSolidIcon],svg[rivet-icons-audio-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 0v16l-5.333-4H0V4h3.667zm2.586 8l-1.5 1.5l1.414 1.414l1.5-1.5l1.5 1.5L15.914 9.5l-1.5-1.5l1.5-1.5L14.5 5.086l-1.5 1.5l-1.5-1.5L10.086 6.5z"></svg:path>`,
})
export class RivetIconsAudioOffSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
