import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCameraDisabledSolidIcon],svg[streamline-camera-disabled-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.219.219a.75.75 0 0 0 0 1.06l.178.179q.027.021.051.046l12.328 12.328a.75.75 0 0 0 1.005-1.112l-.83-.829A1 1 0 0 0 13.5 11V5a1 1 0 0 0-1-1h-2L9 2H5l-.832 1.109L1.28.219a.75.75 0 0 0-1.061 0m8.957 11.78L1.217 4.04A1 1 0 0 0 .5 5v6a1 1 0 0 0 1 1zm.09-4.515q-.002.33-.09.632L6.368 5.307a2.267 2.267 0 0 1 2.898 2.177" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCameraDisabledSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
