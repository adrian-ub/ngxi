import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCampingTentSolidIcon],svg[streamline-camping-tent-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.67.13a.75.75 0 0 1 1.037.218L7 2.325L8.293.348a.75.75 0 1 1 1.255.82L7.896 3.697l5.973 9.135a.75.75 0 0 1-.627 1.16H8v-3.019a1 1 0 1 0-2 0v3.02H.758a.75.75 0 0 1-.627-1.16l5.973-9.136L4.452 1.17A.75.75 0 0 1 4.669.13Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCampingTentSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
