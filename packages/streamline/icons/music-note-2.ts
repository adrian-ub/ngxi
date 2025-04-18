import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMusicNote2Icon],svg[streamline-music-note-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 13.42a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9-2.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M13.5 8.92V1.08a.5.5 0 0 0-.63-.48l-8 2.22a.5.5 0 0 0-.37.48v8.12m0-5.5l9-2.5"></svg:path></svg:g>`,
})
export class StreamlineMusicNote2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
