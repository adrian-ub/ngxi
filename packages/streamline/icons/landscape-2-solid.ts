import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLandscape2SolidIcon],svg[streamline-landscape-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-11A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5zM3.75 2a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m4.651 4.599L2.5 12.5h10v-4L9.69 6.492A1 1 0 0 0 8.4 6.6Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLandscape2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
