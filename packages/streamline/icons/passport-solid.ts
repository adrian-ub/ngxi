import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePassportSolidIcon],svg[streamline-passport-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A1.5 1.5 0 0 0 1 1.5v11A1.5 1.5 0 0 0 2.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11.5 0zm5 9.364A3.4 3.4 0 0 0 10.364 6.5H7.5zm-1 0A3.4 3.4 0 0 1 3.636 6.5H6.5zm1-3.864h2.864A3.4 3.4 0 0 0 7.5 2.636zm-1-2.864V5.5H3.636A3.4 3.4 0 0 1 6.5 2.636" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePassportSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
