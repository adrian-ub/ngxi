import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faStickyNoteIcon],svg[fa-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1120v416H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h1344q40 0 68 28t28 68v928h-416q-40 0-68 28t-28 68m128 32h381q-15 82-65 132l-184 184q-50 50-132 65z"></svg:path>`,
})
export class FaStickyNoteIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
