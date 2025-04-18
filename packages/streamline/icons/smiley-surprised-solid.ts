import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySurprisedSolidIcon],svg[streamline-smiley-surprised-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.999 0a7 7 0 1 0 0 14a7 7 0 0 0 0-14M4.986 9.023c0-1.185.823-2.3 2.013-2.3s2.013 1.115 2.013 2.3s-.824 2.3-2.013 2.3s-2.013-1.115-2.013-2.3M4.58 5.976a1.024 1.024 0 0 1 .002-2.049h.003a1.024 1.024 0 0 1-.003 2.049zm4.831 0a1.024 1.024 0 0 1 .003-2.049h.002a1.024 1.024 0 0 1-.002 2.049z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileySurprisedSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
