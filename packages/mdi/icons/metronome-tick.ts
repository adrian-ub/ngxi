import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMetronomeTickIcon],svg[mdi-metronome-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.75l-3.43.92l-4.5 16.83c-.01 0-.07.34-.07.5c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2c0-.16-.06-.5-.07-.5l-4.5-16.83zM10.29 4h3.42l3.49 13H13v-5h-2v5H6.8zM11 5v4h-1v2h4V9h-1V5z"></svg:path>`,
})
export class MdiMetronomeTickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
