import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeakerMute20FilledIcon],svg[fluent-speaker-mute-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.996 3.006c0-.873-1.04-1.327-1.68-.733L6.444 5.866a.5.5 0 0 1-.34.134H3.496a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h2.608a.5.5 0 0 1 .34.133l3.872 3.594c.64.593 1.68.14 1.68-.733zm1.146 4.64a.5.5 0 0 1 .708 0l1.646 1.647l1.646-1.647a.5.5 0 1 1 .708.707L16.203 10l1.647 1.646a.5.5 0 1 1-.708.707l-1.646-1.646l-1.646 1.646a.5.5 0 1 1-.707-.707L14.789 10l-1.646-1.647a.5.5 0 0 1 0-.707"></svg:path>`,
})
export class FluentSpeakerMute20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
