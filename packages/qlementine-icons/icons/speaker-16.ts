import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSpeaker16Icon],svg[qlementine-icons-speaker-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3a.999.999 0 0 0-1.582-.814l-2.54 1.81h-2.38a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5h2.38l2.54 1.81A1.001 1.001 0 0 0 9 12.993v-10zM2.5 5h2.38a1 1 0 0 0 .581-.186l2.54-1.81v10l-2.54-1.81a1 1 0 0 0-.581-.186H2.5a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.5 2.34a.5.5 0 0 1 .663-.246a6.51 6.51 0 0 1 3.79 5.91c0 1.24-.356 2.46-1.03 3.51a6.5 6.5 0 0 1-2.76 2.4a.5.5 0 1 1-.417-.909a5.4 5.4 0 0 0 2.33-2.03a5.51 5.51 0 0 0-.002-5.94a5.5 5.5 0 0 0-2.34-2.03a.5.5 0 0 1-.246-.663z"></svg:path><svg:path fill="currentColor" d="M10.6 5.15a.5.5 0 0 1 .683-.183a3.498 3.498 0 0 1 .003 6.06a.5.5 0 0 1-.501-.865a2.5 2.5 0 0 0 1.247-2.165a2.5 2.5 0 0 0-1.251-2.164a.5.5 0 0 1-.183-.683z"></svg:path>`,
})
export class QlementineIconsSpeaker16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
