import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSpeakerMute16Icon],svg[qlementine-icons-speaker-mute-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.9 5.15a.5.5 0 0 0-.707.707l1.65 1.65l-1.65 1.65a.5.5 0 0 0 .707.707l1.65-1.65l1.65 1.65a.5.5 0 0 0 .707-.707l-1.65-1.65l1.65-1.65a.5.5 0 0 0-.707-.707L13.55 6.8zM4 5l3.17-2.77a.5.5 0 0 1 .829.376v10.8a.5.5 0 0 1-.829.376L4 11.012H1.5a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5H4z"></svg:path>`,
})
export class QlementineIconsSpeakerMute16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
