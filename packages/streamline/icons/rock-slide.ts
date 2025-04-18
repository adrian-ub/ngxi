import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRockSlideIcon],svg[streamline-rock-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l2 2L3 6l5.5 5l.5 2.5H.5m9.5-7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m3 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-7-10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class StreamlineRockSlideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
