import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleBoardPollIcon],svg[mdi-human-male-board-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H9.5c.3.6.5 1.3.5 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9c0-1.1.9-2 2-2zM8 4c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m9 2h2v8h-2zm-3 4h2v4h-2zm-3 0h2v4h-2z"></svg:path>`,
})
export class MdiHumanMaleBoardPollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
