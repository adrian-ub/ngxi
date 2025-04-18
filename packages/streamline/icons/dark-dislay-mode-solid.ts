import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDarkDislayModeSolidIcon],svg[streamline-dark-dislay-mode-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m7-.019a2.46 2.46 0 0 1 2.46-2.459c.25 0 .441-.3.258-.47a3.996 3.996 0 1 0 0 5.86c.183-.17-.008-.471-.258-.471A2.46 2.46 0 0 1 7 6.98Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDarkDislayModeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
