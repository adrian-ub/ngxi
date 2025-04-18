import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac2SolidIcon],svg[streamline-zodiac-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.077 2A1.077 1.077 0 0 0 2 3.077v6.23a1 1 0 1 1-2 0v-6.23A3.077 3.077 0 0 1 5.154.807a3.077 3.077 0 0 1 5.106 1.731h.308c2.896 0 4.346 3.501 2.298 5.549l-2.486 2.486A.846.846 0 0 0 12 10.23v-.423a1 1 0 1 1 2 0v.423a2.847 2.847 0 0 1-5.063 1.785l-.73.73a1 1 0 0 1-1.414-1.415l1.515-1.514v-6.74a1.077 1.077 0 0 0-2.154-.006v6.237a1 1 0 1 1-2 0v-6.23A1.077 1.077 0 0 0 3.077 2m7.23 5.817l1.145-1.145c.787-.787.23-2.134-.884-2.134h-.26z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
