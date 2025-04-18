import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicEqualizerSolidIcon],svg[streamline-music-equalizer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75.851a.75.75 0 0 0-1.5 0V13.15a.75.75 0 0 0 1.5 0zM4 2.466a.75.75 0 0 1 .75.75v7.568a.75.75 0 1 1-1.5 0V3.216a.75.75 0 0 1 .75-.75M1 4.831a.75.75 0 0 1 .75.75V8.42a.75.75 0 0 1-1.5 0V5.581a.75.75 0 0 1 .75-.75m9-2.365a.75.75 0 0 1 .75.75v7.568a.75.75 0 1 1-1.5 0V3.216a.75.75 0 0 1 .75-.75m3.75 3.115a.75.75 0 0 0-1.5 0V8.42a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMusicEqualizerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
