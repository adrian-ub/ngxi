import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTelevisionStopIcon],svg[mdi-television-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a2 2 0 0 1 2 2v12c0 1.1-.9 2-2 2h-5v2H8v-2H3c-1.1 0-2-.9-2-2V5c0-1.11.89-2 2-2m0 2v12h18V5zm6 3h6v6H9z"></svg:path>`,
})
export class MdiTelevisionStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
