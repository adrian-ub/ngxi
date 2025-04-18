import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSpeaker1SolidIcon],svg[streamline-speaker-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.526.113A1.987 1.987 0 0 0 .908 3.675a6.96 6.96 0 0 0-.85 3.175a6.9 6.9 0 0 0 .671 3.133c-.799.699-.902 1.958-.209 2.776c.734.865 2.06.888 2.862.168a6.92 6.92 0 0 0 7.235.001c.833.756 2.215.68 2.93-.273c.629-.838.47-2.01-.278-2.67a6.88 6.88 0 0 0 .562-4.224a7 7 0 0 0-.739-2.086A1.986 1.986 0 1 0 10.33.912a6.94 6.94 0 0 0-6.66 0a2 2 0 0 0-1.144-.8ZM7 11.043a4.038 4.038 0 1 0 0-8.076a4.038 4.038 0 0 0 0 8.076M5.45 7.005a1.55 1.55 0 1 1 3.1 0a1.55 1.55 0 0 1-3.1 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSpeaker1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
