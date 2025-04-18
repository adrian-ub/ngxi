import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSoundWaveCircle20FilledIcon],svg[fluent-sound-wave-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0M6 8.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V9a.5.5 0 0 0-.5-.5m5.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zM8.5 7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5m5.5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentSoundWaveCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
