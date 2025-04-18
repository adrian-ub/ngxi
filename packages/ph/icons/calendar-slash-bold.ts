import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalendarSlashBoldIcon],svg[ph-calendar-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93A12 12 0 0 0 48 28a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a12 12 0 0 0 8.88-20.07ZM52 204V62.24L180.87 204ZM228 48v117.34a12 12 0 1 1-24 0V100h-58.31a12 12 0 0 1 0-24H204V52h-16a12 12 0 0 1-24 0h-61.94a12 12 0 0 1 0-24H164v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhCalendarSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
