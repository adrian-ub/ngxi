import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWatchCircleMenuIcon],svg[streamline-watch-circle-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 5.75H7.102M9 8.25H7.102M7 11.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path d="M9.5 3.25V1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.75m5 7.484V12.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.766M5.258 6a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0 3a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineWatchCircleMenuIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
