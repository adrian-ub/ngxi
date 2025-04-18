import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBaggageSolidIcon],svg[streamline-baggage-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2.25A1.75 1.75 0 0 0 5.323 3.5h3.354A1.75 1.75 0 0 0 7 2.25m-2.298-.548a3.25 3.25 0 0 0-.91 1.777l.004.068v10.406q0 .024-.002.047h6.412l-.002-.047V3.547l.004-.068a3.25 3.25 0 0 0-5.506-1.777m6.75 1.798l.002.047v10.406q0 .024-.002.047h.048a2.5 2.5 0 0 0 2.5-2.5V6a2.5 2.5 0 0 0-2.5-2.5zM2.5 3.5h.048l-.002.047v10.406q0 .024.002.047H2.5A2.5 2.5 0 0 1 0 11.5V6a2.5 2.5 0 0 1 2.5-2.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBaggageSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
