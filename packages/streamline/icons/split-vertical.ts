import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSplitVerticalIcon],svg[streamline-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.675 4.13L.785.61L4.305.5M.783.608L7 6.697M7 6.7v6.8m6.325-9.37l-.11-3.52L9.695.5m3.522.108L7 6.697"></svg:path>`,
})
export class StreamlineSplitVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
