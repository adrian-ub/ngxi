import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeakerMute48FilledIcon],svg[fluent-speaker-mute-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.081 6.419C26.208 5.408 28 6.207 28 7.72v32.56c0 1.514-1.792 2.313-2.919 1.302l-8.206-7.366A4.75 4.75 0 0 0 13.702 33H9a5.25 5.25 0 0 1-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.702a4.75 4.75 0 0 0 3.173-1.216zm7.285 11.948a1.25 1.25 0 0 1 1.768 0L38 22.233l3.866-3.866a1.25 1.25 0 1 1 1.768 1.767L39.768 24l3.866 3.867a1.25 1.25 0 0 1-1.768 1.767L38 25.768l-3.866 3.866a1.25 1.25 0 0 1-1.768-1.767L36.232 24l-3.866-3.866a1.25 1.25 0 0 1 0-1.767"></svg:path>`,
})
export class FluentSpeakerMute48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
