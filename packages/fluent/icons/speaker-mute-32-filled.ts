import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpeakerMute32FilledIcon],svg[fluent-speaker-mute-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5.604c0-1.114-1.346-1.672-2.134-.884l-4.694 4.694A2 2 0 0 1 9.757 10H6a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3.757a2 2 0 0 1 1.415.586l4.694 4.694c.788.788 2.134.23 2.134-.884zm3.293 6.689a1 1 0 0 1 1.414 0L25 14.586l2.293-2.293a1 1 0 0 1 1.414 1.414L26.414 16l2.293 2.293a1 1 0 0 1-1.414 1.414L25 17.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L23.586 16l-2.293-2.293a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class FluentSpeakerMute32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
