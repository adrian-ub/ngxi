import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList8Icon],svg[streamline-play-list-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 .5H1.5a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1H10a1 1 0 0 0 1-1V1.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M13.5 3.5v9a1 1 0 0 1-1 1h-9m.25-5.86V3.86a.36.36 0 0 1 .55-.31l3.27 1.89a.36.36 0 0 1 0 .62L4.3 8a.36.36 0 0 1-.55-.36"></svg:path></svg:g>`,
})
export class StreamlinePlayList8Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
