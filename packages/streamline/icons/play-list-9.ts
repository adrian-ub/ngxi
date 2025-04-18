import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayList9Icon],svg[streamline-play-list-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.688 5.656a1 1 0 0 1 1-1h7.75a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7.75a1 1 0 0 1-1-1z"></svg:path><svg:path d="M10.5 2.875v-.281a1 1 0 0 0-1-1H1.75a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.188M7.5 6.781l3 1.875l-3 1.875z"></svg:path></svg:g>`,
})
export class StreamlinePlayList9Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
