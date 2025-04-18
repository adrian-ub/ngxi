import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSpeaker016Icon],svg[qlementine-icons-speaker-0-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 5l3.17-2.77a.5.5 0 0 1 .829.376v10.8a.5.5 0 0 1-.829.376L4 11.012H1.5a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5H4z"></svg:path>`,
})
export class QlementineIconsSpeaker016Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
