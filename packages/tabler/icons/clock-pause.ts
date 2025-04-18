import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockPauseIcon],svg[tabler-clock-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.942 13.018a9 9 0 1 0-7.909 7.922"></svg:path><svg:path d="M12 7v5l2 2m3 3v5m4-5v5"></svg:path></svg:g>`,
})
export class TablerClockPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
