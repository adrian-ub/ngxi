import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSoundWaveCircle16FilledIcon],svg[fluent-sound-wave-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.5 5.5A.5.5 0 0 1 7 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M12 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 1 0m-3 .5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m-4.5 1v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0"></svg:path>`,
})
export class FluentSoundWaveCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
