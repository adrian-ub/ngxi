import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSoundWaveCircle24FilledIcon],svg[fluent-sound-wave-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-1 6.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 1.5 0m6 0v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 1.5 0m-3 1.5v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 1.5 0m-6 .5v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentSoundWaveCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
